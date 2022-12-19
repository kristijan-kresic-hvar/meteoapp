import PropTypes from 'prop-types'

const Filters = ({ filters, handleFilterChange, title, options }) => (
    <div className="container mx-auto flex flex-col items-center mt-10">
        <div className="mt-8 mb-10 xl:mb-0 xl:self-start">
            <h1 className="font-bold text-2xl">{title}</h1>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-5 gap-x-16 xl:gap-x-24 xl:mt-14 ">
            {options.map(option => (
                <div key={option.id}>
                    <input
                        id={option.id}
                        type="checkbox"
                        name={option.name}
                        value={option.value}
                        checked={filters.includes(option.value)}
                        onChange={handleFilterChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label
                        htmlFor={option.id}
                        className="ml-2 text-md font-medium text-gray-900"
                    >
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    </div>

)

Filters.propTypes = {
    filters: PropTypes.array.isRequired,
    handleFilterChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
}

export default Filters
