import ImageKit from "imagekit";

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLICK,
    privateKey : process.env.IMAGEKIT_PRIVATEK,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT,
});

export default imagekit