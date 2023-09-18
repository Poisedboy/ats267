
export const getPosts = async () => {
    try {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQVJWN1lTcmV0WkRmc2dTRkN0cVh4VE92ZADc3V3dSZADJvbmx0bkhxZAjQzMzZAFSVI0VGVMLThEZAnRXZAzE0UHRYbGx0V21uNXNuMmlLWG42WXRWYlRvZAk9taVdSSE5DbGptdlNXVDVIdERjTVJsLXN4LQZDZD`
        const response = await fetch(url)
        // if (!response.ok) {
        //     throw new Error('Network response was not ok!!!')
        // }
        const result = await response.json()
        return result.data
    } catch (e) {
        console.log('Error fetching data: ', e);
    }
}