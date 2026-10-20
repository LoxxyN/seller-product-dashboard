const BASE_URL = import.meta.env.VITE_API_URLe ?? '/api'

export class HttpError extends Error {
	status: number

	constructor(status: number, message: string) {
		super(message)
		this.name = 'HttpError'
		this.status = status
	}
}

export async function httpGet<T>(
	path: string,
	signal?: AbortSignal,
): Promise<T> {
	const res = await fetch(`${BASE_URL}${path}`, {
		headers: { Accept: 'application/json' },
		signal,
	})
	if (!res.ok)
		throw new HttpError(res.status, `${res.status} ${res.statusText}`)
	return res.json() as Promise<T>
}
