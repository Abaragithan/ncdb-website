import PropTypes from 'prop-types';
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    ClockIcon
} from '@heroicons/react/24/outline';

const ContactInfo = ({ contactInfo }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 text-center">
                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6 mx-auto">
                    <PhoneIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-4">Phone</h3>
                <p className="text-blue-700 text-base md:text-lg lg:text-xl font-semibold mb-1 md:mb-2">
                    {contactInfo.phone}
                </p>
                <p className="text-blue-500 text-sm">For general inquiries and support</p>
            </div>

            <div className="bg-gradient-to-br from-white to-indigo-50 rounded-xl md:rounded-2xl shadow-lg border border-indigo-100 p-6 md:p-8 text-center">
                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 mb-4 md:mb-6 mx-auto">
                    <EnvelopeIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-4">Email</h3>
                <p className="text-blue-700 text-base md:text-lg font-semibold mb-1 md:mb-2">
                    {contactInfo.email}
                </p>
                {contactInfo.inquiryEmail && (
                    <p className="text-blue-500 text-xs md:text-sm">For detailed inquiries: {contactInfo.inquiryEmail}</p>
                )}
            </div>

            <div className="bg-gradient-to-br from-white to-cyan-50 rounded-xl md:rounded-2xl shadow-lg border border-cyan-100 p-6 md:p-8 text-center">
                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 mb-4 md:mb-6 mx-auto">
                    <MapPinIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-4">Address & Hours</h3>
                <p className="text-blue-700 mb-2 md:mb-3 text-sm md:text-base">{contactInfo.address}</p>
                <div className="flex items-center justify-center text-blue-500 text-sm">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    <span>{contactInfo.hours}</span>
                </div>
            </div>
        </div>
    );
};

ContactInfo.propTypes = {
    contactInfo: PropTypes.shape({
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        hours: PropTypes.string.isRequired,
        inquiryEmail: PropTypes.string
    }).isRequired
};

export default ContactInfo;