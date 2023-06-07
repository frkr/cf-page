import { getAssetFromKV } from '@cloudflare/kv-asset-handler';
// @ts-ignore
import manifestJSON from '__STATIC_CONTENT_MANIFEST';

const assetManifest = JSON.parse(manifestJSON);

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {

		//region GET
		if (request.method === 'GET') {
			try {
				return await getAssetFromKV(
					// @ts-ignore
					{
						request,
						waitUntil(promise) {
							return ctx.waitUntil(promise);
						},
					},
					{
						// @ts-ignore
						ASSET_NAMESPACE: env.__STATIC_CONTENT,
						ASSET_MANIFEST: assetManifest,
					},
				);
			} catch (e) {
				// if (e instanceof NotFoundError) {
				// } else if (e instanceof MethodNotAllowedError) {
			}
		} else
			//endregion

			//region POST
		if (request.method === 'POST') {
			console.log('POST', JSON.stringify(request.url)); // FIXME deletar
			return new Response('OK', { status: 200 });
		}
		//endregion

		return NOT_FOUND();
	},
};

//region Default Responses
export const NOT_FOUND = () => new Response('404 Not Found', { status: 404 });
export const UNPROCESSABLE_ENTITY = () => new Response('422 Unprocessable Content', { status: 422 });
export const INTERNAL_SERVER_ERROR = () => new Response('500 Internal Server Error', { status: 500 });
//endregion
