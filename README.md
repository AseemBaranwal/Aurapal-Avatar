# EMOTIONAL-AVATAR

## Description

EMOTIONAL-AVATAR is an advanced virtual companion designed to provide empathetic support by interpreting and reacting to users' emotions. Leveraging cutting-edge technologies such as the Llama 2 language model and a Conditional Variational Autoencoder (CVAE), this system offers a novel approach to enhancing user engagement through sensitive and nuanced responses, facial expressions, and gestures.

### Expression Videos

<table>
  <tr>
    <td align="center">
      <a href="https://www.youtube.com/watch?v=nChZNyCEMSE" title="Happy Expression">
        <img src="https://img.youtube.com/vi/nChZNyCEMSE/0.jpg" alt="Happy Expression" style="width:150px;">
      </a>
      <br>Happy Expression
    </td>
    <td align="center">
      <a href="https://www.youtube.com/watch?v=TtoRwYejk2E" title="Sad Expression">
        <img src="https://img.youtube.com/vi/TtoRwYejk2E/0.jpg" alt="Sad Expression" style="width:150px;">
      </a>
      <br>Sad Expression
    </td>
    <td align="center">
      <a href="https://www.youtube.com/watch?v=pEuGm5dBQUo" title="Disgust Expression">
        <img src="https://img.youtube.com/vi/pEuGm5dBQUo/0.jpg" alt="Disgust Expression" style="width:150px;">
      </a>
      <br>Disgust Expression
    </td>
  </tr>
</table>

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
