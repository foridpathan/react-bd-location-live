import './App.css';
import { BDLocations } from 'react-bd-location';
import { useState } from 'react';

function App() {
  const [controller, setController] = useState({
    bn: false,
    showLable: true,
    className: '',
    label: {
      division: "",
      district: "",
      upazila: "",
    },
    placeholder: {
      division: "",
      district: "",
      upazila: "",
    }
  })

  const onChange = (e) => {
    console.log(e)
  }
  return (
    <div className="App">
      <header className="App-header">
        <BDLocations
          onChange={(e) => onChange(e)}
          bn={controller.bn}
          showLable={controller.showLable}
          className={controller.className}
          label={controller.label}
          placeholder={controller.placeholder}
        />

        <div className='controller'>
          <h2>Control all props</h2>
          <table>
            <thead>
              <tr>
                <td>Props</td>
                <td>Default</td>
                <td>Type</td>
                <td>Customize</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bn</td>
                <td>false</td>
                <td>Boolean</td>
                <td>
                  <div className="container">
                    <label className="switch">
                      <input type="checkbox" checked={controller.bn} onChange={() => setController({ ...controller, bn: !controller.bn })} />
                      <div></div>
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>showLable</td>
                <td>true</td>
                <td>Boolean</td>
                <td>
                  <div className="container">
                    <label className="switch">
                      <input type="checkbox"
                        checked={controller.showLable}
                        onChange={() => setController({ ...controller, showLable: !controller.showLable })} />
                      <div></div>
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>className</td>
                <td></td>
                <td>string</td>
                <td>
                  <input type="text"
                    value={controller.className}
                    onChange={(e) => setController({ ...controller, className: e.target.value })} />
                </td>
              </tr>
              <tr>
                <td>label</td>
                <td></td>
                <td>object</td>
                <td>
                  <div>
                    <input type="text"
                      placeholder='Change Division Label'
                      value={controller.label.division}
                      onChange={(e) => setController({
                        ...controller,
                        label: {
                          ...controller.label,
                          division: e.target.value
                        }
                      })} />
                  </div>
                  <div>
                    <input type="text"
                      placeholder='Change District Label'
                      value={controller.label.district}
                      onChange={(e) => setController({
                        ...controller,
                        label: {
                          ...controller.label,
                          district: e.target.value
                        }
                      })} />
                  </div>
                  <div>
                    <input type="text"
                      placeholder='Change Upazila Label'
                      value={controller.label.upazila}
                      onChange={(e) => setController({
                        ...controller,
                        label: {
                          ...controller.label,
                          upazila: e.target.value
                        }
                      })} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td></td>
                <td>object</td>
                <td>
                  <div>
                    <input type="text"
                      placeholder='Change Division placeholder'
                      value={controller.placeholder.division}
                      onChange={(e) => setController({
                        ...controller,
                        placeholder: {
                          ...controller.placeholder,
                          division: e.target.value
                        }
                      })} />
                  </div>
                  <div>
                    <input type="text"
                      placeholder='Change District placeholder'
                      value={controller.placeholder.district}
                      onChange={(e) => setController({
                        ...controller,
                        placeholder: {
                          ...controller.placeholder,
                          district: e.target.value
                        }
                      })} />
                  </div>
                  <div>
                    <input type="text"
                      placeholder='Change Upazila placeholder'
                      value={controller.placeholder.upazila}
                      onChange={(e) => setController({
                        ...controller,
                        placeholder: {
                          ...controller.placeholder,
                          upazila: e.target.value
                        }
                      })} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>onChange</td>
                <td></td>
                <td>function</td>
                <td>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
      <div className='use'>
        <h3>How to Use</h3>
        <pre>
          {
            `<BDLocations
  onChange={(e) => console.log(e)}
  bn={${controller.bn}}
  showLable={${controller.showLable}}
  className="${controller.className}"
  label={{
    division: "${controller.label.division}",
    district: "${controller.label.district}",
    upazila: "${controller.label.upazila}"
  }}
  placeholder={{
    division: "${controller.placeholder.division}",
    district: "${controller.placeholder.district}",
    upazila: "${controller.placeholder.upazila}"
  }}
/>`
          }
        </pre>
      </div>
    </div>
  );
}

export default App;
