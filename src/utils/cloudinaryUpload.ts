import cloudinary from "../config/cloudinary";
export const uploadBufferToCloudinary = async (buffer: Buffer, folder: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { folder },
            (error, result) => { 
                if (error) {
                    reject(error);
                } else {
                    resolve(result!.secure_url);
                }
            }
        );
        uploadStream.end(buffer);
    });
}       


    