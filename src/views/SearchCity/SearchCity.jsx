// local components
import Sidebar from '../../components/Sidebar/Sidebar'

// local assets
import styles from './SearchCity.module.css'

const SearchCity = () => {
    return (
        <div className={styles.SearchCity}>
            <Sidebar
                title="Favorites"
                favorites={[
                    {
                        id: 1,
                        name: 'London'
                    },
                    {
                        id: 2,
                        name: 'Paris'
                    },
                    {
                        id: 3,
                        name: 'New York'
                    }
                ]}
                onSelect={() => { }}
            />
            <main>

            </main>
        </div>
    )
}

export default SearchCity