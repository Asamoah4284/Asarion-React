import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    subCategory: '',
    featuredImage: null,
    content: ''
  });

  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Update the modules configuration to include more styling options
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],  // Add color options
      [{ 'font': [] }],  // Add font family
      [{ 'size': ['small', false, 'large', 'huge'] }],  // Add font size
      ['link', 'image'],
      ['clean']
    ],
  };

  // Update formats to include new styling options
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'blockquote', 'code-block',
    'align',
    'color', 'background',
    'font', 'size',
    'link', 'image'
  ];

  // Add custom CSS styles for the editor
  const editorStyle = {
    '.ql-editor': {
      minHeight: '400px',
      fontSize: '1.1rem',
      lineHeight: '1.6',
    },
    '.ql-editor h1': {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      fontWeight: 'bold',
    },
    '.ql-editor h2': {
      fontSize: '2rem',
      marginBottom: '0.8rem',
      fontWeight: 'bold',
    },
    '.ql-editor p': {
      marginBottom: '1rem',
    },
    '.ql-editor blockquote': {
      borderLeft: '4px solid #ccc',
      paddingLeft: '1rem',
      marginLeft: '0',
      marginRight: '0',
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const formDataToSend = new FormData();
      
      // Append all fields
      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('subtitle', formData.subtitle);
      formDataToSend.append('subCategory', formData.subCategory);
      
      if (formData.featuredImage) {
        formDataToSend.append('featuredImage', formData.featuredImage);
      }

      // Log the FormData contents for debugging
      for (let pair of formDataToSend.entries()) {
        console.log(pair[0] + ': ', pair[1]);
      }

      const response = await fetch('http://localhost:5000/api/blog', {
        method: 'POST',
        body: formDataToSend,
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create blog post');
      }

      const data = await response.json();
      console.log('Blog post created:', data);
      
      // Reset form
      setFormData({
        title: '',
        subtitle: '',
        subCategory: '',
        featuredImage: null,
        content: ''
      });
      
      alert('Blog post created successfully!');
      
    } catch (error) {
      console.error('Error creating blog post:', error);
      setError(error.message || 'Error creating blog post');
    } finally {
      setIsLoading(false);
    }
  };

  // Modify handleChange to handle both regular inputs and editor content
  const handleChange = (e) => {
    if (typeof e === 'string') {
      // This is from the Quill editor
      setFormData(prev => ({
        ...prev,
        content: e
      }));
    } else {
      // This is from regular inputs
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, featuredImage: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-8 bg-gray-50">
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl md:text-6xl font-bold text-gray-900 mb-2">Create New Post</h2>
          <p className="text-2xl text-gray-600">Share your thoughts with the world</p>
        </div>
        <button
          type="submit"
          form="blogForm"
          disabled={isLoading}
          className={`px-6 py-3 bg-blue-600 text-lg text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-sm hover:shadow-md ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? 'Publishing...' : 'Publish Post'}
        </button>
      </div>

      <form id="blogForm" onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Left Side */}
        <div className="lg:col-span-2 space-y-8">
          {/* Title Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <label htmlFor="title" className="block text-2xl font-medium text-gray-700 mb-3">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full text-3xl font-semibold border-2 p-5 rounded-lg mb-4"
                placeholder="Enter your post title"
                required
              />
              <label htmlFor="subtitle" className="block text-2xl font-medium text-gray-700 mb-3">
                Subtitle
              </label>
              <input
                type="text"
                id="subtitle"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                className="w-full text-2xl border-2 p-4 rounded-lg"
                placeholder="Enter a subtitle for your post"
              />
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <label htmlFor="content" className="block text-2xl font-medium text-gray-700 mb-3">
                Content
              </label>
              <ReactQuill
                theme="snow"
                value={formData.content}
                onChange={handleChange}
                modules={modules}
                formats={formats}
                className="h-96 mb-12"
                style={editorStyle}
                placeholder="Start writing your amazing post..."
              />
            </div>
          </div>
        </div>

        {/* Sidebar - Right Side */}
        <div className="space-y-8">
          {/* Category Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Category</h3>
            <select
              id="subCategory"
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 bg-gray-50 text-gray-800 text-3xl"
              required
            >
              <option value="">Select a category</option>
              <option value="Marketing">Marketing</option>
              <option value="Business">Business</option>
              <option value="Technology">Technology</option>
              <option value="Sales">Sales</option>
            </select>
          </div>

          {/* Featured Image Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Featured Image</h3>
            <div 
              className={`relative border-2 border-dashed rounded-lg ${
                previewUrl ? 'border-transparent' : 'border-gray-300 hover:border-blue-500'
              } transition-colors duration-200 bg-gray-50`}
            >
              {previewUrl ? (
                <div className="relative group">
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        setPreviewUrl(null);
                        setFormData(prev => ({ ...prev, featuredImage: null }));
                      }}
                      className="text-white bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium text-3xl"
                    >
                      Remove Image
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-8">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-16 w-16 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="mt-4">
                      <label className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors duration-200">
                        <span className="text-2xl font-medium">Choose Image</span>
                        <input
                          id="image-upload"
                          name="featuredImage"
                          type="file"
                          className="sr-only"
                          onChange={handleImageChange}
                          accept="image/*"
                        />
                      </label>
                    </div>
                    <p className="text-lg text-gray-500 mt-3">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;