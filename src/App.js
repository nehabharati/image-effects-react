import './App.css';
import { ImageContainer } from './main';
import filters from './main/filters.json';
import properties from './properties.json';
import { useState } from 'react';

function App() {
  const [image, setImage] = useState('');
  const [selectedImage, setSelectedImage] = useState('https://bit.ly/3ytsBSU');
  const handleChange = (e) => setImage(e.target.value);
  const handleClick = () => {
    if (image !== '') {
      setSelectedImage(image);
      setImage('');
    }
  };
  return (
    <div>
      <h1>Add instagram filters to your images</h1>

      <div className="add-image-wrapper">
        <label htmlFor="insert">Paste any image to test</label>
        <input
          type="text"
          name="insert"
          value={image}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </div>

      <div className="filter-wrapper">
        {filters.map((filter) => (
          <div key={filter.name} className="filter-block">
            <ImageContainer
              options={{
                filter: filter.name,
              }}
            >
              <img src={selectedImage} alt="filter" />
            </ImageContainer>
            <div className="filter-description">
              <p>{filter.name}</p>
              <code>{filter.code}</code>
            </div>
          </div>
        ))}
      </div>

      <section>
        <h2>Description</h2>
        <p>
          This is a library used to add instagram filters to your images There
          are a range of filters listed here to choose from Filters Not enough?
          No problem. Feel free to customize each filter by their properties
        </p>
      </section>

      <section>
        <h2>How to use it?</h2>
        <pre>
          <code>{`npm i image-effects-react`}</code>
        </pre>
        <pre>
          <code>
            {`import { ImageContainer } from "image-effects-react"

function addFilter() {
    return (
      <ImageContainer
        options={{
          filter: 'walden',
        }}
      >
        <img src="./image.png" alt="filter" />
      </ImageContainer>
    )
  }
          `}
          </code>
        </pre>

        <h3>How to customize?</h3>
        <pre>
          <code>
            {`import { ImageContainer } from "image-effects-react"

function addFilter() {
  return (
    <ImageContainer
      options={{
        filter: 'walden',
        hueRotate: '-20deg',
        contrast: '2',
        sepia: '0.5',
        saturate: '1'
      }}
    >
      <img src="./image.png" alt="filter" />
    </ImageContainer>
  )
}
          `}
          </code>
        </pre>
      </section>

      <section className="property-table">
        <h2>Available properties</h2>
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Usage</th>
            </tr>
          </thead>
          {properties.map((property) => (
            <tbody key={property.name}>
              <tr>
                <td>{property.name}</td>
                <td>
                  {property.usage}
                  <br />
                  <b>{property.comments && `(${property.comments})`}</b>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </section>

      <section>
        <h2>Features</h2>
        <ul>
          <li>Each filter depicts the properties that can be customized.</li>
          <li>Google Chrome 43+  ✅</li>
          <li>Mozilla Firefox 38+  ✅</li>
          <li>Safari 8+ ✅</li>
          <li>Opera 32+  ✅</li>
          <li>Internet Explorer ❌</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
