import { forwardRef } from 'react';

const variants = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md',
  secondary:
    'bg-secondary-500 text-white hover:bg-secondary-600 shadow-sm hover:shadow-md',
  outline:
    'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  ghost:
    'text-primary-600 hover:bg-primary-50',
  danger:
    'bg-danger-500 text-white hover:bg-danger-600 shadow-sm',
  white:
    'bg-white text-primary-600 hover:bg-primary-50 shadow-sm',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
  xl: 'px-10 py-4 text-lg',
};

const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    icon: Icon,
    iconPosition = 'left',
    disabled = false,
    loading = false,
    fullWidth = false,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2 rounded-lg font-semibold
        transition-all duration-200 ease-in-out
        disabled:opacity-50 disabled:cursor-not-allowed
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {!loading && Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </button>
  );
});

export default Button;
