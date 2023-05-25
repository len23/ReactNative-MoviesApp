import { FileSystemUploadType } from 'expo-file-system';
import { makeAPIFileCall } from './apiUtilities';

export const uploadProfilepicture = async (fileUri: string, uploadType: FileSystemUploadType) => {
  try {
    const response = await makeAPIFileCall('/uploadPhotoProfile', fileUri, uploadType, 'PATCH');
    console.log(JSON.stringify(response, null, 4));
  } catch (error) {
    console.log(error);
  }
};
