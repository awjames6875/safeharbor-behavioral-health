'use client'

import Script from 'next/script'

interface SEOTrackingProps {
  gtmId?: string;
  gaId?: string;
  clarityId?: string;
}

export default function SEOTracking({
  gtmId = 'GTM-XXXXXXX',  // Replace with actual GTM ID
  gaId = 'G-XXXXXXXXXX',   // Replace with actual GA4 ID
  clarityId = 'XXXXXXXXX'  // Replace with actual Clarity ID
}: SEOTrackingProps) {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}
      </Script>

      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'medicaid_acceptance',
              'custom_parameter_2': 'service_type',
              'custom_parameter_3': 'location_area'
            }
          });

          // Track form submissions
          window.addEventListener('load', function() {
            const forms = document.querySelectorAll('form');
            forms.forEach(function(form) {
              form.addEventListener('submit', function(e) {
                gtag('event', 'form_submit', {
                  'event_category': 'engagement',
                  'event_label': 'contact_form',
                  'value': 1
                });
              });
            });

            // Track phone number clicks
            const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
            phoneLinks.forEach(function(link) {
              link.addEventListener('click', function(e) {
                gtag('event', 'phone_call', {
                  'event_category': 'engagement',
                  'event_label': 'phone_click',
                  'value': 1
                });
              });
            });

            // Track location page visits
            if (window.location.pathname.includes('/locations/')) {
              gtag('event', 'location_page_view', {
                'event_category': 'navigation',
                'event_label': window.location.pathname,
                'custom_parameter_3': window.location.pathname.split('/locations/')[1]
              });
            }

            // Track service page visits
            if (window.location.pathname.includes('/services/')) {
              gtag('event', 'service_page_view', {
                'event_category': 'navigation',
                'event_label': window.location.pathname,
                'custom_parameter_2': window.location.pathname.split('/services/')[1]
              });
            }

            // Track Medicaid/SoonerCare related interactions
            const medicaidElements = document.querySelectorAll('[data-track="medicaid"]');
            medicaidElements.forEach(function(element) {
              element.addEventListener('click', function() {
                gtag('event', 'medicaid_interest', {
                  'event_category': 'insurance',
                  'event_label': 'medicaid_click',
                  'custom_parameter_1': 'medicaid_accepted'
                });
              });
            });
          });
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="clarity-script" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `}
      </Script>

      {/* GTM NoScript fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </>
  )
}