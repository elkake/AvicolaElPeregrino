import React from 'react'
import cell from '../svg/icons/cellphone.svg'
import mail from '../svg/icons/main.svg'
import phone from '../svg/icons/phone.svg'

function Footer () {
  return (
    <div id='footer'>

        <section className='footer_map'>
          <iframe width="100%" height="600" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=50%25&amp;height=600&amp;hl=es&amp;q=INDUSTRIA%20AVICOLA%20EL%20PEREGRINO%20SRL+(Avicola%20El%20Peregrino)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">GPS car tracker</a></iframe>
          <h4>MALLEA 106 - 8000 BAHIA BLANCA <br /> PROVINCIA BS AS</h4>
        </section>
        <section className='footer_text'>
          <div className="footer_text-ico1">

          <a href='tel:+5402914882296' target='_blank' rel="noreferrer" className="footer_text-ico">
            <img src={cell} alt="" />
             </a><a href='tel:+5402915045508' target='_blank' rel="noreferrer" className="footer_text-ico">
            <img src={phone} alt="" />
             </a><a href='mailto:elperegrino_srl@hotmail.com' target='_blank' rel="noreferrer" className="footer_text-ico">
            <img src={mail} alt="" />

          </a>
          </div><div className="footer_text-ico2">

        <a className='footer_text-a'
            href='tel:+5402914882296' target='_blank' rel="noreferrer"
            >TEL/FAX: 0291 - 4882296</a>
          <a className='footer_text-a'
            href='tel:+5402915045508' target='_blank' rel="noreferrer"
            >CELL: 291 - 5045508</a>
          <a className='footer_text-a'
            href='mailto:elperegrino_srl@hotmail.com' target='_blank' rel="noreferrer"
            >elperegrino_srl@hotmail.com</a>
            </div>
        </section>
    </div>
  )
}

export default Footer
