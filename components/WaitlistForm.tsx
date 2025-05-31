'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Add this import
import './WaitlistForm.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
}

interface Question {
  label: string;
  type: 'text' | 'email' | 'tel' | 'radio';
  name: keyof FormData;
  options?: string[];
  validate: (value: string) => string;
}

const WaitlistForm: React.FC = () => {
  const router = useRouter(); // Add this line
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    experience: ''
  });
  const [errors, setErrors] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions: Question[] = [
    {
      label: '1. Name*',
      type: 'text',
      name: 'name',
      validate: (value: string) => value.trim() ? '' : 'Name is required'
    },
    {
      label: '2. Email*',
      type: 'email',
      name: 'email',
      validate: (value: string) => {
        if (!value) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      }
    },
    {
      label: '3. Phone Number*',
      type: 'tel',
      name: 'phone',
      validate: (value: string) => {
        if (!value) return 'Phone number is required';
        if (!/^\d{10}$/.test(value)) return 'Phone number must be exactly 10 digits';
        return '';
      }
    },
    {
      label: '4. Please select your experience in trading',
      type: 'radio',
      name: 'experience',
      options: [
        'Beginner (0-1 year)',
        'Intermediate (1-3 years)',
        'Advanced (3+ years)',
      ],
      validate: (value: string) => value ? '' : 'Please select an option'
    }
  ];

  const validateCurrentStep = (): boolean => {
    const question = questions[currentStep];
    const value = formData[question.name];
    const error = question.validate(value);
    
    setErrors(error);
    return !error;
  };

  const handleInputChange = (value: string) => {
    const question = questions[currentStep];
    setFormData(prev => ({
      ...prev,
      [question.name]: value
    }));
    setErrors('');
  };

  const handleContinue = async () => {
    if (!validateCurrentStep()) return;

    if (currentStep === questions.length - 1) {
      await submitForm();
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setErrors('');
    }
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      console.log('Submitting form data:', formData);
      
      // Replace with your actual API endpoint
      const response = await fetch('/.netlify/functions/addToWaitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Navigate to thank you page on success
        router.push('./thank-you'); // Change this to your thank you page route
      } else if (response.status === 409) {
        // Navigate to already registered page if user already exists (409 Conflict)
        router.push('./already-registered'); // Change this to your already registered page route
      } else {
        throw new Error('Submission failed');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // You can also create an error page and navigate there
      alert('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentStep < questions.length - 1) {
      e.preventDefault();
      handleContinue();
    }
  };

  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === questions.length - 1;

  return (
    <div className="container">
      
      <div className="content">
        <main className="main">
          <h1 className="title">
            Join Waitlist
          </h1>
          
          <p className="description">
            Thousands of traders are figuring it out the hard way. You don't have to.<br />
            Get early access to a game-changing platform that helps you learn, build, and trade with clarity.<br />
            Early users get exclusive features, faster onboarding, and priority support
          </p>

          <div className="step-counter">
            {currentStep + 1}/4 question
          </div>

          <div className="question-card">
            <div className="question-label">
              {currentQuestion.label}
            </div>

            {currentQuestion.type === 'radio' ? (
              <div className="radio-container">
                {currentQuestion.options?.map((option, index) => (
                  <label key={index} className="radio-label">
                    <input
                      type="radio"
                      name={currentQuestion.name}
                      value={option}
                      checked={formData[currentQuestion.name] === option}
                      onChange={(e) => handleInputChange(e.target.value)}
                      className="radio-input"
                    />
                    <span className="radio-text">{option}</span>
                  </label>
                ))}
              </div>
            ) : (
              <input
                type={currentQuestion.type}
                value={formData[currentQuestion.name]}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyPress={handleKeyPress}
                className="text-input"
                placeholder=""
              />
            )}

            {errors && (
              <div className="error-text">
                {errors}
              </div>
            )}
          </div>

          <div className="button-container">
            <button
              onClick={handleContinue}
              disabled={isSubmitting}
              className={`continue-button ${isSubmitting ? 'disabled' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : isLastStep ? 'Submit' : 'Continue'}
            </button>

            {!isLastStep && (
              <div className="enter-hint">
                <span>press <strong>Enter</strong></span>
                <div className="enter-icon">
                  ↵
                </div>
              </div>
            )}
          </div>

          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="back-button"
            >
              ←
            </button>
          )}
        </main>
      </div>
    </div>
  );
};

export default WaitlistForm;