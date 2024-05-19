import React, { useState, useEffect } from 'react';
imporimport React, { useState, useEffect } from 'react';
import MenuProfile from '../../Components/User/MenuProfile';
import Card from '../../Components/Uitily/Card';

function UserWishlistPage() {
    const [modeList, setModeList] = useState(true);

    useEffect(() => {
        if (window.innerWidth < 766) {
            setModeList(false);
        }
    }, []); // تمرير مصفوفة اعتمادات فارغة لتشغيل useEffect مرة واحدة عند تحميل المكون

    return (
        <div className='wishlist-page py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <MenuProfile />
                    </div>
                    <div className="col-lg-10">
                        <h3 className='sub-title'>Wishlist</h3>
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className={`${modeList ? "col-lg-12" : "col-lg-4 col-md-6"}`}>
                                <Card modeList={modeList} closeBtn={true} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserWishlistPage;
