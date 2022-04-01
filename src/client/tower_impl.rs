use super::*;

use tower_service::Service;

#[cfg_attr(nightly, doc(cfg(feature = "tower_client")))] // FIXME: This doc_cfg does nothing
impl<'a, T, E, F> Client<'a> for TowerService<T>
where
    T: Service<Request, Response = Response, Error = E, Future = F>,
    T: Clone + Send + Sync + 'static,
    E: std::error::Error + Sync + Send + 'static,
    F: Future<Output = Result<Response, E>> + Send + 'static,
{
    type Error = E;

    fn req(&'a self, request: Request) -> BoxedFuture<'static, Result<Response, Self::Error>> {
        let mut service = self.0.clone();
        Box::pin(async move {
            futures::future::poll_fn(|cx| service.poll_ready(cx)).await?;
            let response = service.call(request).await?;
            Ok(response)
        })
    }
}

/// A wrapped [tower](tower_service::Service) service
pub struct TowerService<S>(pub S);

impl<S, Fut, Err> TowerService<S>
where
    S: Service<Request, Response = Response, Error = Err, Future = Fut> + Clone + Send + Sync,
    Fut: std::future::Future<Output = Result<Response, Err>> + 'static,
    Err: std::error::Error + Sync + Send + 'static,
{
    // TODO: needs tait: https://github.com/rust-lang/rust/issues/63063
    /// Create a new wrapped tower service
    ///
    /// A function returning the service would be expressed as
    ///
    /// ```rust
    /// use twitch_api2::client::{Response, Request};
    ///
    /// fn service() -> impl tower_service::Service<
    ///     Request,
    ///     Response = Response,
    ///     Error = impl std::error::Error + Sync + Send + 'static,
    /// > + Clone
    ///        + Send
    ///        + Sync {
    ///     todo!()
    /// # ; Dummy
    /// }
    /// # #[derive(Debug, Clone, thiserror::Error)] #[error("nope")] struct Dummy; impl tower_service::Service<Request> for Dummy {
    /// # type Response = Response; type Error = Dummy; type Future = futures::future::Ready<Result<Response, Dummy>>;
    /// # fn poll_ready(&mut self, _: &mut std::task::Context<'_>) -> std::task::Poll<Result<(), Self::Error>> { todo!() }
    /// # fn call(&mut self, _: Request) -> Self::Future { todo!() } }
    /// # fn test() {twitch_api2::client::TowerService::new(service());}
    /// ```
    pub fn new(s: S) -> Self { TowerService(s) }
}

impl<S: Default> Default for TowerService<S> {
    fn default() -> Self { TowerService(S::default()) }
}

impl<S: Clone> Clone for TowerService<S> {
    fn clone(&self) -> Self { TowerService(self.0.clone()) }
}
