import React, {Component} from 'react';
import './App.scss';

import prescriptionLogo from './assets/icons/prescription.png';

class MeetingSidePanel extends Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef();
      }

      componentDidMount() {

      }

      render() {
        return (
          <div className={"SidePanelContainer"} ref={this.ref}>
              <div className={"docInfoSection"}>
                  <div>
                  <p>MagnaCode Bangalore</p>
                  <p>159, 3rd floor Chitra Vihar, Near Swasthya Vihar</p>
                  <p>near Laxmi Nagar, Delhi</p>
                  <p>Phone: 43084093284</p>
                  <p>Email: kvicky047@gmail.com</p>
                  </div>
                  <div>
                  <p>Dr. Gajanan Kulkarni</p>
                  <p>MD</p>
                  <p>Pshycatrist</p>
                  </div>
              </div>
              <div className={"refInfoSection"}>
                  <div>
                  <p>Date :</p>
                  <p>Ref.by :</p>
                  </div>
                  <div>
                  <p>05/06/2021</p>
                  <p>Dr. Gajanan Kulkarni</p>
                  </div>
              </div>
              <hr />
              <div className={"diagnosisInfoSection"}>
                  <table>
                      <tbody>
                          <tr>
                              <td>Height :</td>
                              <td>151cm</td>
                          </tr>
                          <tr>
                              <td>Complaints :</td>
                              <td><ul><li>Off medicines 2 week</li><li>Has terminal insomnia</li><li>Denies any anxiety symptoms</li></ul></td>
                          </tr>
                          <tr>
                              <td>Diagnosis :</td>
                              <td>TYPE2 DM</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
            <div className={"medInfoSection"}>
            <img src={prescriptionLogo} alt="Rx"></img>
            <table>
                <thead>
                    <tr>
                        <th>Medicine</th>
                        <th>Dose</th>
                        <th>Timing-Freq-Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p>MIRTAZ 7.5 MG TABLET</p><p>Composition - Mirtazapine 7.5mg</p></td>
                        <td>0-0-1</td>
                        <td>After Dinner-Daily-3 months</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <hr/>
            <div className={"referalSection"}>
                <p><span>Next visit : </span>3 months</p>
                <button className={"referalBtn"}>ANY REFERAL</button>
            </div>
          </div> 
        )
      }
}

export default MeetingSidePanel;
