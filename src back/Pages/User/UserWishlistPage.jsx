import React, { useState } from 'react'
import MenuProfile from '../../Components/User/MenuProfile'
import Card from '../../Components/Properties/Card'
import PropertiesPageHook from '../../hook/Properties/PropertiesPageHook';

function UserWishlistPage() {
    const [modeList, setModeList] = useState(true)
    const [properties, loading] = PropertiesPageHook();


    return (
        <div className='wishlist-page py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <MenuProfile />
                    </div>
                    <div className="col-lg-10">
                        <h3 className='sub-title'>Wishlist</h3>
                        {loading === false && properties && properties.length > 0 && properties.map((item) => <div key={item.id} className={`${modeList ? "col-lg-12" : "col-lg-4 col-md-6"}`}>
                            <Card modeList={modeList} id={item.id} data={item.attributes} imgs={item.attributes.imgs.data[0].attributes.formats} closeBtn={true} />
                        </div>)}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserWishlistPage
