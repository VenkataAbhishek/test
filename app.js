// app.js

document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const files = document.getElementById('file-input').files;
    const progressBar = document.getElementById('upload-progress');
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append('file', file);

        // Simulate file upload (replace this with actual upload logic)
        setTimeout(() => {
            const progress = ((i + 1) / files.length) * 100;
            progressBar.value = progress;

            if (progress === 100) {
                progressBar.value = 0;
                alert('Files uploaded successfully!');
            }
        }, 1000 * (i + 1));
    }
});

// Example of dynamically updating file list (replace with actual logic)
document.getElementById('file-list').innerHTML = `
    <li>example-file1.pdf</li>
    <li>example-file2.jpg</li>
`;
