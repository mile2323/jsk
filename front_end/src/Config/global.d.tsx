export {};

declare global {
  interface Window {
    config: {
      fileUploadUrl: string;
      uploadImageSize: number;
      uploadVideoSize: number;
      uploadFileSize: number;
      profilePicSize: number;
      siteName: string;
      baseUrl: string;
      imageUrl: string;
    };
  }
}


// Extend the global window object with the config type