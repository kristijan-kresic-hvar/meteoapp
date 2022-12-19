import checkboxes from './checkboxes'

const DailyFilters = ({ filters, handleFilterChange }) => (
    <div className="container mx-auto flex justify-center mt-10">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-5 gap-x-16 xl:gap-x-24 xl:mt-14 ">
            {checkboxes.map(checkbox => (
                <div key={checkbox.id}>
                    <input
                        id={checkbox.id}
                        type="checkbox"
                        name={checkbox.name}
                        value={checkbox.value}
                        checked={filters.includes(checkbox.value)}
                        onChange={handleFilterChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label
                        htmlFor={checkbox.id}
                        className="ml-2 text-md font-medium text-gray-900"
                    >
                        {checkbox.label}
                    </label>
                </div>
            ))}
        </div>
    </div>

)

export default DailyFilters
