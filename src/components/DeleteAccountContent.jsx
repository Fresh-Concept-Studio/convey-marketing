import React from 'react';

const DeleteAccountContent = () => {
  return (
    <>
      <div className="w-full mx-auto p-6 bg-white my-20">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Request Account Deletion</h1>
          
          <p className="text-gray-700 mb-4">
              If you wish to have your account and all associated data deleted, please contact our support team at the email below. We ensure that none of your personal data will be retained for any period of time after the deletion request is processed.
          </p>

          <div className="bg-gray-100 border-l-4 border-red-500 p-4 mb-4">
              <p className="font-semibold text-red-600">Email us at:</p>
              <a href="mailto:support@conveystatus.com" className="text-red-600 font-bold">support@conveystatus.com</a>
          </div>

          <p className="text-gray-700">
              Our team will process your request as soon as possible. Once processed, all your data will be permanently deleted.
          </p>
      </div>
    </>
  );
}

export default DeleteAccountContent;