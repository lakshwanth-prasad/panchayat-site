export const Contact = (props) => {
  

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <button type='submit' onClick="window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSd47BxexQS8Fmkh0wyLElDeQ8KB0glazA4i3u4Et1KgwQFqRg/viewform?usp=sf_link'" className='btn btn-custom btn-lg'>
                  Raise Complaint
                </button>
                <button className='btn btn-custom btn-lg'><a className="a1" href='https://docs.google.com/forms/d/e/1FAIpQLSd47BxexQS8Fmkh0wyLElDeQ8KB0glazA4i3u4Et1KgwQFqRg/viewform?usp=sf_link' alt='Broken Link'>Raise Complaint</a></button>
                {/*<p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>*/}
                <table className="tables3">
  <tr>
    <th className='tables'>Ward</th>
    <th className='tables2'>Name</th> 
    <th style={{"width":'50%',"color":"#fff"}}>Mobile Number</th>
  </tr>
  <tr className='tables'>
    <td>1</td>
    <td>Anbumani</td>
    <td>9841050234</td>
  </tr>
  <tr className='tables'>
    <td>2</td>
    <td>Gunalakshmi</td>
    <td>9841050221</td>
  </tr>
  <tr className='tables'>
    <td>3</td>
    <td>Madhanraj</td>
    <td>9841411143</td>
  </tr>
  <tr className='tables'>
    <td>4</td>
    <td>Devika Kannan</td>
    <td>9176112257</td>
  </tr>
  <tr className='tables'>
    <td>5</td>
    <td>Bharathi Ammal </td>
    <td>8754476844</td>
  </tr>
  <tr className='tables'>
    <td>6</td>
    <td>Gajalakshmi</td>
    <td>9962132610</td>
  </tr>
  <tr className='tables'>
    <td>7</td>
    <td>Sudarkodi</td>
    <td>8825800570</td>
  </tr>
  <tr className='tables'>
    <td>8</td>
    <td>Selvin Arulraj</td>
    <td>9677264464</td>
  </tr>
  <tr className='tables'>
    <td>9</td>
    <td>Chandrasekar</td>
    <td>9941056000</td>
  </tr>
  <tr className='tables'>
    <td>10</td>
    <td>Elakiya</td>
    <td>9380677139</td>
  </tr>
  <tr className='tables'>
    <td>11</td>
    <td>Tamilselvi </td>
    <td>7010466682</td>
  </tr>
  <tr className='tables'>
    <td>12</td>
    <td>Dhayanithi</td>
    <td>9884056682</td>
  </tr>
</table>

              </div>
               {/*<form name='sentMessage' validate onSubmit={handleSubmit}>
               <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                
              </form>*/}
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>SOME IMPORTANT CONTACTS</h3>
              <p>
                <span>
                  <i className='fa fa-phone'></i> EB Help Line
                </span>{' '}
                {props.data ? props.data.ebphone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Madambakkam EB Direct
                </span>{' '}
                {props.data ? props.data.madamebphone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> S15-Selaiyur Police Station
                </span>{' '}
                {props.data ? props.data.police : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Police Control Room
                </span>{' '}
                {props.data ? props.data.controlphone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> State Help Line
                </span>{' '}
                {props.data ? props.data.statehelp : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Accident Help Line
                </span>{' '}
                {props.data ? props.data.acchelp : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Child Help Line
                </span>{' '}
                {props.data ? props.data.chelp : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 Vengaivasal Panchayat{' '}, Designed By &nbsp;
            <a href='https://aicl.training/' rel='nofollow'>
              AICL
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
