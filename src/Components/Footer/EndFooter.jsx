import Image from 'next/image';
import React from 'react';
import logo from "../../../public/footer.svg";

const EndFooter = () => {
    return (
      <footer className='border'>
          <div className='w-100 d-flex justify-content-between align-items-center container-fluid px-5'>
            <div>
                <p className='mob-font text-muted footer-fs fw-bold'>COPYRIGHT 2022. MARAKEZ</p>
            </div>
            <div>
                <Image src={logo} width={"100"} height={100} alt="logo" className='w-mob' />
            </div>
            <div className='d-flex flex-column footer-fs' >
                <p className='text-muted m-0 mob-font'>FOLLOW US ON</p>
                <p className='color-blue m-0 mob-font text-end font-weight'>FACEBOOK</p>
                <p className='color-blue m-0 mob-font text-end font-weight'>YOUTUBE</p>
                <p className='color-blue m-0 mob-font text-end font-weight'>INSTAGRAM</p>
            </div>
        </div>
      </footer>
    );
};

export default EndFooter;