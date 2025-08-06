interface TrustBadgesProps {
  variant?: 'horizontal' | 'vertical' | 'compact';
  className?: string;
}

// Individual badge export for use in other components
export const MedicaidBadge = ({ className = '' }: { className?: string }) => (
  <div className={`inline-flex items-center bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-sm font-semibold ${className}`}>
    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    We Accept Medicaid
  </div>
);

export default function TrustBadges({ variant = 'horizontal', className = '' }: TrustBadgesProps) {
  const badges = [
    {
      icon: '🛡️',
      title: 'HIPAA Compliant',
      subtitle: 'Your privacy protected'
    },
    {
      icon: '✅',
      title: 'Licensed Therapists',
      subtitle: 'State-certified professionals'
    },
    {
      icon: '🏥',
      title: 'Medicaid Accepted',
      subtitle: 'SoonerCare welcomed'
    },
    {
      icon: '⚡',
      title: 'Same-Week Appointments',
      subtitle: 'No long waiting lists'
    },
    {
      icon: '🏆',
      title: 'CARF Accredited',
      subtitle: 'Quality standards met'
    },
    {
      icon: '📱',
      title: '24/7 Crisis Support',
      subtitle: 'Always here to help'
    }
  ];

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
        {badges.slice(0, 3).map((badge, index) => (
          <div key={index} className="flex items-center space-x-2 bg-white px-3 py-2 rounded-full shadow-sm border">
            <span className="text-lg">{badge.icon}</span>
            <span className="font-medium text-sm text-gray-800">{badge.title}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`space-y-4 ${className}`}>
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
            <div className="text-2xl">{badge.icon}</div>
            <div>
              <h4 className="font-semibold text-gray-800">{badge.title}</h4>
              <p className="text-sm text-gray-600">{badge.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ${className}`}>
      {badges.map((badge, index) => (
        <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <div className="text-3xl mb-2">{badge.icon}</div>
          <h4 className="font-semibold text-sm text-gray-800 mb-1">{badge.title}</h4>
          <p className="text-xs text-gray-600">{badge.subtitle}</p>
        </div>
      ))}
    </div>
  );
}