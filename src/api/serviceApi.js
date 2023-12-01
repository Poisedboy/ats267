
export const getPosts = async () => {
    try {
        const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQWRQRFJjX19MZAnFReFdDUy1NWjFRcXlXN1RVb3J1NzRaWXVHYjI3dmIzS3NPZA3cxLWQyV1lCQzV3NHBPSDF3ME90NWFpaWZAuMllPWV9uM2xoMnVtN0JHaVVERG1abjhpREY1a1JNUWFxWDdJdGpVbkpnNkdkZAFkZD`
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