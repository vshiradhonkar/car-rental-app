import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import '../dist/styles.css';

function License() {
    const [image, setImage] = useState(null);
    const auth = getAuth();
    const [uploadMessage, setUploadMessage] = useState('');
    const [selectedFileName, setSelectedFileName] = useState('');

    const handleImageChange = (e) => {
    if (e.target.files[0]) {
        const selectedImage = e.target.files[0];

      if (selectedImage.size <= 500 * 1024 && selectedImage.type === 'image/jpeg') {
        setImage(selectedImage);
        setUploadMessage('');
        setSelectedFileName(selectedImage.name);
        } else {
        setUploadMessage('Please upload an image in JPG format and below 500KB.');
        }
    }
};

const handleImageUpload = async () => {
    if (image) {
        try {
        const storage = getStorage();
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);

        const downloadUrl = await getDownloadURL(storageRef);

        const user = auth.currentUser;
        if (user) {
            const db = getFirestore();
            const imagesCollectionRef = collection(db, 'user_License');

            await addDoc(imagesCollectionRef, {
            userId: user.uid,
            userEmail: user.email,
            imageUrl: downloadUrl,
            timestamp: serverTimestamp(),
            });

            setImage(null);
            setUploadMessage('Image uploaded successfully!');
        }
        } catch (error) {
        console.error('Error uploading image and storing user details:', error);
        setUploadMessage('Error uploading image. Please try again.');
        }
    } else {
        console.warn('No image selected.');
    }
};

return (
    <div>
        <p className="upload-label">Please upload your License here.</p>
        <div className="upload-container">
            <label htmlFor="imageInput" className="custom-file-label">
            <span className="custom-file-text">{selectedFileName || 'Choose File'}</span>
            <input
                type="file"
                id="imageInput"
                accept="image/jpeg"
                className="custom-file-input"
                onChange={handleImageChange}
            />
            </label>
            <button type="button" className="upload-button" onClick={handleImageUpload}>
            Upload
            </button>
        </div>
        <p>{uploadMessage}</p>
        </div>
);
}

export default License;
