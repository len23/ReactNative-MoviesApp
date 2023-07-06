import { FileSystemUploadType } from 'expo-file-system';
import { makeAPIFileCall } from './apiUtilities';

export const uploadProfilepicture = async (
  fileUri: string,
  uploadType: FileSystemUploadType,
  nameFile: string,
) => {
  try {
    const response = await makeAPIFileCall(
      `/uploadPhotoProfile/${nameFile}`,
      fileUri,
      uploadType,
      'PATCH',
    );
    console.log(JSON.stringify(response, null, 4));
  } catch (error) {
    console.log(error);
  }
};
