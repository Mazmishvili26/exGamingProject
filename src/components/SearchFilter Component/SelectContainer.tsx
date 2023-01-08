interface Props  {
    setOpenPlatform: (openPlatform: boolean) => void;
    openPlatform: boolean;
    platformValue: string;
    setPlatformValue: (value: string) => void;
    platformData: { id: number; value: string }[];
    handlePlatformValue: (event: any) => void;
    IoIosClose : JSX.Element;
    BiUpArrow : JSX.Element;
    title : string;
    classOfName : string;
}

function SelectContainer(props : Props) {

    const
        {
            handlePlatformValue,
            openPlatform,platformData,
            platformValue,setOpenPlatform,
            setPlatformValue , IoIosClose, 
            BiUpArrow,classOfName , title 
        } = props;


  return (
        <div className='select-container'>

                <div className={openPlatform ? "select border" : "select"} onClick={() => setOpenPlatform(!openPlatform)}>
                    <p>{platformValue || title}</p>
                    {BiUpArrow}
                    {platformValue && 
                        <div className='clear' onClick={() => setPlatformValue('')}>
                            {IoIosClose}
                        </div>
                    }

                </div>

                {openPlatform &&
                    <>
                        <div className={classOfName}>
                            <ul className='platform-ul'>
                                {platformData.map((platform) => {
                                    const {id,value} = platform;
                                    return <li key={id} onClick={(e : any) => handlePlatformValue(e)}>{value}</li>
                                })}
                            </ul>
                        </div>
                    </>
                }
    </div>
  )
}

export default SelectContainer