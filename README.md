# EMOTIONAL-AVATAR

## Description

EMOTIONAL-AVATAR is an advanced virtual companion designed to provide empathetic support by interpreting and reacting to users' emotions. Leveraging cutting-edge technologies such as the Llama 2 language model and a Conditional Variational Autoencoder (CVAE), this system offers a novel approach to enhancing user engagement through sensitive and nuanced responses, facial expressions, and gestures.

## DEMO

<!-- #### Happy Expression

[![Happy Expression](https://drive.google.com/uc?export=view&id=1Gtai7U0QYXx86Tz6bP52s3hSd1LSFKJS)](https://drive.google.com/file/d/1jLjtw5usLCgWnqcBO4ygFvD4drXQIAzU)

#### Sad Expression

[![Sad Expression](https://drive.google.com/uc?export=view&id=1MsAkqtV18LdCo1xESR4y4zv1T-nHzawg)](https://drive.google.com/file/d/1jwWrJbxhClmwM18a6mfzZ8PwdhSUFhxl)

#### Disgust Expression

[![Disgust Expression](https://drive.google.com/uc?export=view&id=1Usdp7I7S0YXBo6XXLsStiFbPAJ5U6w_w)](https://drive.google.com/file/d/18ilcMnJ-4IhOTQrHkCf4zn6l905YGlg2) -->

#### Happy Expression

<video width="320" height="240" controls>
  <source src="https://drive.google.com/file/d/1jLjtw5usLCgWnqcBO4ygFvD4drXQIAzU.mov" type="video/mp4">
  Your browser does not support the video tag.
</video>

#### Sad Expression

<video width="320" height="240" controls>
  <source src="https://drive.google.com/file/d/1jwWrJbxhClmwM18a6mfzZ8PwdhSUFhxl.mov" type="video/mp4">
  Your browser does not support the video tag.
</video>

#### Disgust Expression

<video width="320" height="240" controls>
  <source src="https://drive.google.com/file/d/18ilcMnJ-4IhOTQrHkCf4zn6l905YGlg2.mov" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Environment Setup

Before starting the application, you need to set up environment variables that will be used by both the front-end and the back-end.

### Backend Environment Setup

1. In the `back-end` directory, create a file named `.env`.
2. Open the `.env` file and add the following environment variables:

```
AZURE_KEY={your-azure-key}
AZURE_REGION={your-azure-region}
```

Replace `{your-azure-key}` with your actual Azure key and `{your-azure-region}` with your Azure service region.

### Frontend Environment Setup

1. In the `front-end` directory, create a file named `.env`.
2. Open the `.env` file and add the following environment variables:

```
REACT_APP_ALTER_API={your-alter-api-key}
REACT_APP_OPENAI_API_KEY={your-openai-api-key}
```

Replace `{your-alter-api-key}` with your actual Alter API key and `{your-openai-api-key}` with your OpenAI API key.

After setting up the `.env` files, proceed with the installation steps as described above.

## Installation

Before installation, ensure you have [Node.js](https://nodejs.org/) installed on your system.

1. Clone the repository to your local machine.
2. Navigate to both `front-end` and `back-end` directories in separate terminal windows.
3. Install dependencies using the following command:

   ```sh
   npm install
   ```

4. Start the application by running:

   ```sh
   npm start
   ```

This will start the local servers for both the front-end and back-end parts of the project.

## Usage

After starting the application, navigate to `http://localhost:<port>` on your browser to interact with the Emotional Support Avatar. Replace `<port>` with the port number specified in the `.env` files of your front-end and back-end directories.

## Project Structure

- `back-end`: Contains the server logic, including API endpoints for processing emotional data and serving the Avatar responses.
- `front-end`: Holds the client-side code, responsible for user interface and interaction with the Avatar.
- `public`: Static assets such as stylesheets and images for the application.
- `routes`: Server routes to handle HTTP requests.
- `views`: Templates for rendering the web pages.
- `helpers`: Utility modules to assist with various tasks in the backend.
- `bin`: Binary files for the server.

## Data

The UIBVFED dataset utilized for this project includes 640 facial images across 20 virtual characters, demonstrating 32 distinct expressions. This dataset, coupled with the CVAE, forms the backbone of the Avatar's expressive capabilities.

## Contributing

We welcome contributions to the EMOTIONAL-AVATAR project. Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## Authors

- **Aseem Baranwal**
- **Arshdeep Kaur**
- **Ashish Sunny Abraham**
- **Devanshu Singh**

For contact information, please refer to the `package.json` file.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Acknowledgments

- The authors would like to thank the contributors to the UIBVFED dataset for providing the data essential for training our models.
- Gratitude goes to the Llama model contributors for the foundational language model used in this project.

## Additional Notes

- Ensure you review the `.env` files for environment-specific variables.
- For details on the research and methodologies behind EMOTIONAL-AVATAR, please refer to our paper `Aurapal_Expressive_Agents.pdf`.
