// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const CourseVideos = () => {
//     const { id } = useParams(); // Get the course ID from the URL
//     const [videos, setVideos] = useState([]);
//     const [loading, setLoading] = useState(true); // State to track loading status
//     const [error, setError] = useState(null); // State to track error status

//     useEffect(() => {
//         // Fetch course videos data from the backend API
//         fetch(`http://localhost:3001/api/courses/${id}/videos`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log('Fetched videos:', data); // Log fetched video data
//                 if (Array.isArray(data)) {
//                     setVideos(data);
//                 } else {
//                     setError(new Error('Invalid response from the server'));
//                 }
//                 setLoading(false); // Update loading status once data is fetched
//             })
//             .catch(error => {
//                 console.error('Error fetching videos:', error);
//                 setError(error); // Update error state if there's an error
//                 setLoading(false); // Update loading status if there's an error
//             });
//     }, [id]);

//     // Display error message if an error occurred
//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     return (
//         <div className="container mx-auto p-4 mt-40 h-screen">
//             <h2 className="text-3xl font-semibold mb-4">Course Videos</h2>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <div>
//                     <h3>Videos:</h3>
//                     <ul>
//                         {videos.map((video, index) => (
//                             <li key={index}>
//                                 <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
//                                     {video.title}: {video.videoUrl}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CourseVideos;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const CourseVideos = () => {
    const { id } = useParams(); // Get the course ID from the URL
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to track error status

    useEffect(() => {
        // Fetch course videos data from the backend API
        fetch(`http://localhost:3001/api/courses/${id}/videos`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched videos:', data); // Log fetched video data
                if (Array.isArray(data)) {
                    setVideos(data);
                } else {
                    setError(new Error('Invalid response from the server'));
                }
                setLoading(false); // Update loading status once data is fetched
            })
            .catch(error => {
                console.error('Error fetching videos:', error);
                setError(error); // Update error state if there's an error
                setLoading(false); // Update loading status if there's an error
            });
    }, [id]);

    // Function to extract video ID from YouTube URL
    const extractVideoId = url => {
        const regExp = /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    // Display error message if an error occurred
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mx-auto p-4 mt-40 h-screen  flex justify-center">

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <ul>
                        {videos.map((video, index) => (
                            <li key={index} className="flex justify-center">

                                {extractVideoId(video.videoUrl) ? (
                                    <YouTube videoId={extractVideoId(video.videoUrl)} />
                                ) : (
                                    <p>Invalid YouTube URL</p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CourseVideos;
