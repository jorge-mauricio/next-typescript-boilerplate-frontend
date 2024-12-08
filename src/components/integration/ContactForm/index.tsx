import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './styles.module.scss';

interface ContactFormProps {
  title: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  comments: string;
}

/**
 * Contact form component.
 *
 * @param {ContactFormProps} props
 * @returns {JSX.Element}
 */
const ContactForm = ({ title }: ContactFormProps): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    comments: '',
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**
   * Handle input change.
   *
   * @param {ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e
   * @returns {void}
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;

    // Only allow numbers for phone
    // NOTE: Prototype shortcut, as we could format as the number is typed.
    if (name === 'phone' && value !== '' && !/^\d+$/.test(value)) {
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear messages when user starts typing again
    setErrors([]);
    setSuccessMessage('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    // Check for empty fields
    Object.entries(formData).forEach(([key, value]) => {
      if (typeof value === 'string' && !value.trim()) {
        const formattedKey = key
          .replace(/([a-z])([A-Z])/g, '$1 $2')
          .replace(/^./, str => str.toUpperCase());
        newErrors.push(`${formattedKey} input is required`);
      }
    });

    // Email validation
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.push('Please enter a valid email address');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      setSuccessMessage('');
      return;
    }

    // If all validations pass
    setSuccessMessage('Message sent successfully');
    setErrors([]);

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      comments: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles['contact-form']}>
      <h3 className={styles['contact-form-title']}>{title}</h3>

      {errors.length > 0 && (
        <div className={`${styles['contact-form-message']} ${styles.error}`}>
          {errors.map(error => (
            <div key={error}>{error}</div>
          ))}
        </div>
      )}

      {successMessage && (
        <div className={`${styles['contact-form-message']} ${styles.success}`}>
          {successMessage}
        </div>
      )}

      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        placeholder="Full Name *"
        className={`${styles['contact-form-input']} ${
          errors.includes('Fullname is required') ||
          errors.some(e => e.toLowerCase().includes('full name'))
            ? styles.error
            : ''
        }`}
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email *"
        className={`${styles['contact-form-input']} ${
          errors.some(e => e.toLowerCase().includes('email')) ? styles.error : ''
        }`}
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Phone Number *"
        className={`${styles['contact-form-input']} ${
          errors.some(e => e.toLowerCase().includes('phone')) ? styles.error : ''
        }`}
      />

      <textarea
        name="comments"
        value={formData.comments}
        onChange={handleInputChange}
        placeholder="Comments *"
        rows={4}
        className={`${styles['contact-form-input']} ${
          errors.some(e => e.toLowerCase().includes('comments')) ? styles.error : ''
        }`}
      />

      <button type="submit" className={styles['contact-form-button']}>
        Contact Now
      </button>
    </form>
  );
};

export default ContactForm;
