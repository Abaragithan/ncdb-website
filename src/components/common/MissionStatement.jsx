import PropTypes from 'prop-types';

const MissionStatement = ({
    mission,
    icon: Icon,
    title = "Our Mission",
    bgColor = "from-blue-700 to-indigo-800"
}) => {
    return (
        <div className="mb-12 md:mb-20">
            <div className={`bg-gradient-to-r ${bgColor} rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-12 text-center`}>
                {Icon && (
                    <div className="flex items-center justify-center mb-6 md:mb-8">
                        <Icon className="h-12 w-12 md:h-16 md:w-16 text-white" />
                    </div>
                )}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8">
                    {title}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white italic leading-relaxed">
                    "{mission}"
                </p>
            </div>
        </div>
    );
};

MissionStatement.propTypes = {
    mission: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
    title: PropTypes.string,
    bgColor: PropTypes.string
};

export default MissionStatement;