import React, {  useContext } from 'react'
import { PhotoAdd } from '../../../static/svg'
import styles from "../../style.module.css"
import Remove from '../../../UIComponents/Remove/Input'
import Image from '../../../UIComponents/Image/Image'
import { Context } from '../../Context/Context'

const labelStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#211536",
    marginBottom: "10px",
    display: "block",
}

const PhotoSelector = () => {

    const { photoReader } = useContext(Context)

    return (
        <div className={styles.flex__block}>
            <div>
                <label htmlFor='photo' style={labelStyle}>Фотография</label>
                <input id='photo' {...photoReader.bind} type='file' style={{ display: "none" }} />

                <div style={{ position: "relative", maxHeight: "126px", maxWidth: "126px", marginBottom: "10px" }}>
                    {photoReader.previews.length ?
                        <>
                            <Image src={`${photoReader.previews[0]?.baseCode}`} />
                            <Remove onClick={() => photoReader.clear()} />
                        </>
                        :
                        <button type='button' className="photo__add" onClick={(e) => photoReader.previews.length <= 0 ? photoReader.load(e) : () => { }}>
                            <PhotoAdd />
                        </button>
                    }
                </div>
                <div className="photo__title" style={{ marginBottom: "10px" }}>Главная фотография<br /> (обложка мероприятия)</div>
                {!photoReader.previews.length && <div style={{ color: "red", wordWrap: "break-word" }}>Выберите фото мероприятия</div>}
            </div>
        </div >
    )
}
export default PhotoSelector