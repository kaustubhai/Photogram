import {useState, useEffect} from 'react';
import {projectStorage} from './firebase/config';

const useStorage = (photos) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(NULL);
    const [url, setUrl] = useState(NULL);

    useEffect(() => {
        const storageRef = projectStorage.ref(photos.title);

        storageRef.put(photos).on('state_changed', async() => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })
    }, [photos])
}