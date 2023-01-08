import {useState} from 'react'

// import icons
import {BiUpArrow} from 'react-icons/bi'
import {IoIosClose} from 'react-icons/io'


// import components
import SelectContainer from './SelectContainer';

type DataFilter = {
    platformValue : string,
    setPlatformValue : (platformValue: string) => void;
    sortValue : string,
    setSortValue : (sortValue : string) => void;
    categoryValue : string,
    setCategoryValue : (sortValue : string) => void;
}

// createData for selectDropdown

const platformData = [
    {
        id:1,
        value : 'pc'
    },

    {
        id:2,
        value : 'browser'
    },


    {
        id:3,
        value : 'all'
    },

]

const sortData = [
    {
        id:1,
        value : 'release-date'
    },

    {
        id:2,
        value : 'alphabetical'
    },

    {
        id:3,
        value : 'popularity'
    },

    {
        id:4,
        value : 'relevance'
    }
]


const categories = "mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts"

const categoryArray = categories.split(", ")

const categoryObjects = categoryArray.map((category, index) => {
  return {
    id: index + 1,
    value: category
  }
})



function DataFilter(props : DataFilter) {


    const {platformValue, setPlatformValue , sortValue , setSortValue, categoryValue, setCategoryValue} = props;

    const [openPlatform,setOpenPlatform] = useState(false);
    const [openSort,setOpenSort] = useState(false);
    const [openCategory,setOpenCategory] = useState(false);



    const handlePlatformValue = (e: any) => {
        setPlatformValue(e.target.innerText);
        setOpenPlatform(false);
    }

    const handleSortValue = (e : any) => {
        setSortValue(e.target.innerText);
        setOpenSort(false);
    }

    const handleCategoryValue = (e : any) => {
        setCategoryValue(e.target.innerText);
        setOpenCategory(false);
    }


  return (
    <div className='data-filter-section'>
        <div className='container data-filter-container'>

            {/*  */}

            <SelectContainer
                setOpenPlatform={setOpenPlatform}
                openPlatform={openPlatform}
                platformValue={platformValue}
                setPlatformValue={setPlatformValue}
                platformData={platformData}
                handlePlatformValue={handlePlatformValue}
                title='Systems'
                IoIosClose={<IoIosClose size={30} className="select-arrow"/>}
                BiUpArrow={<BiUpArrow size={20} className="select-arrow"/>}
                classOfName='platform-select-content'
            />

            <SelectContainer
                setOpenPlatform={setOpenSort}
                openPlatform={openSort}
                platformValue={sortValue}
                setPlatformValue={setSortValue}
                platformData={sortData}
                handlePlatformValue={handleSortValue}
                title='Sort by:'
                IoIosClose={<IoIosClose size={30} className="select-arrow"/>}
                BiUpArrow={<BiUpArrow size={20} className="select-arrow"/>}
                classOfName='platform-select-content'
            /> 


            <SelectContainer
                setOpenPlatform={setOpenCategory}
                openPlatform={openCategory}
                platformValue={categoryValue}
                setPlatformValue={setCategoryValue}
                platformData={categoryObjects}
                handlePlatformValue={handleCategoryValue}
                title='Categories'
                IoIosClose={<IoIosClose size={30} className="select-arrow"/>}
                BiUpArrow={<BiUpArrow size={20} className="select-arrow"/>}
                classOfName='platform-select-content scroll'
            /> 



            {/* <div className='select-container' ref={containerRef}>
                <div className="select" onClick={() => setOpenPlatform(!openPlatform)}>
                    <p>{platformValue || 'Systems'}</p>
                    <BiUpArrow size={20} className="select-arrow"/>

                    {platformValue && 
                        <div className='clear' onClick={() => setPlatformValue('')}>
                            <IoIosClose size={30}/>    
                        </div>
                    }

                </div>

            {openPlatform &&
                <>
                    <div className='platform-select-content'>
                        <ul className='platform-ul'>
                            {platformData.map((platform) => {
                                const {id,value} = platform;
                                return <li key={id} onClick={(e : any) => handlePlatformValue(e)}>{value}</li>
                            })}
                        </ul>
                    </div>
                </>
                }
            </div> */}


            {/*  */}

            {/* <div className='select-container'>
                <div className='select' onClick={() => setOpenSort(!openSort)}>
                    <p>{sortValue || 'Sort by:'}</p>
                    <BiUpArrow size={20} className="select-arrow"/>

                    {sortValue && 
                        <div className='clear' onClick={() => setSortValue('')}>
                            <IoIosClose size={30}/>    
                        </div>
                    }

                </div>

                {openSort &&
                    <>
                        <div className='platform-select-content'>
                            <ul className='platform-ul'>
                                {sortData.map((sort) => {
                                    const {id,value} = sort;
                                    return <li key={id} onClick={(e : any) => handleSortValue(e)}>{value}</li>
                                })}
                            </ul>
                        </div>
                    </>
                }

            </div> */}

        </div>
    </div>
  )
}

export default DataFilter