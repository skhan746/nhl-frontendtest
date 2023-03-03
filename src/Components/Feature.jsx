import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Featurebox from './Featurebox'

import trees from '../images/trees.png'
import svm from '../images/analysis.png'
import tree from '../images/tree.png'
import neighbor from '../images/village.png'
import LR from '../images/linear-regression.png'
import simple from '../images/connector.png'
import complex from '../images/deep-learning.png'
import nlp from '../images/nlp.png'

function Feature() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleClickOpen = (scrollType, featureTitle, featureDescription) => () => {
    setOpen(true);
    setScroll(scrollType);
    setTitle(featureTitle);
    setDescription(featureDescription);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div id='mlmodels'>
      <div id='features'>
      <h1>Machine Learning Models</h1>
      <div className='a-container'>
        <Featurebox
          image={trees}
          title="Random Forest Model"
          onClick={handleClickOpen(
            'paper',
            'Random Forest Model',
            'Random Forest is an ensemble machine learning method that is used for classification, regression and other tasks. It is based on the idea of creating multiple decision trees and combining their predictions to improve the accuracy and robustness of the model. Each decision tree is built on a different subset of the data, created through a process called bootstrapping. This involves randomly sampling the data with replacement, creating a new dataset for each tree. Each tree is trained on a different subset of the data, which helps to reduce the variance of the model and leads to better generalization. The Random Forest algorithm makes predictions by taking the most popular classification or average prediction from all the decision trees. This approach helps to reduce the impact of outliers and noise in the data, making the model more robust and accurate. Random Forests have a number of advantages over other models. They can handle large datasets with high dimensionality and are relatively insensitive to the choice of hyperparameters. They can also handle missing data and noisy data, making them suitable for real-world applications. For predicting the chances of being drafted in the NHL based on factors such as goal amounts, minutes played, assists, and other factors, Random Forest is a suitable approach. It helps to improve the accuracy and robustness of the model by combining the predictions from multiple decision trees, each trained on a different subset of the data. This helps to reduce overfitting and improve the models ability to generalize to new data.',
          )}
        />
        <Featurebox 
        image={tree} 
        title="Decision Tree (Bagging)" 
        onClick={handleClickOpen(
          'paper',
          'Decision Tree (Bagging)',
          'A Decision Tree is a type of machine learning model that recursively splits the data into smaller groups based on the values of features that best differentiate the data into distinct groups. This process creates a hierarchical tree structure, where each internal node represents a decision based on a feature, and each leaf node represents a final decision or prediction. The Decision Tree algorithm splits the data by finding the feature that results in the greatest reduction in impurity or the greatest increase in information gain at each step. The splitting criterion used is often the Gini index or entropy, which measure the homogeneity of the groups formed by the split. The resulting tree can be used to make predictions by following the branches from the root node down to the leaf node corresponding to the predicted class. The Decision Tree algorithm can also handle missing values and categorical features. In our case, the algorithm splits the data based on the most important features that differentiate the drafted and non-drafted players and create a decision tree to predict the chances of being drafted. To avoid overfitting, a stopping criterion such as a maximum tree depth or a minimum number of observations in each group can be used. In our case, the maximum tree depth was set to 3, but this parameter can be tuned to optimize the models performance. Overall, Decision Trees are a simple and interpretable machine learning model that can handle a variety of data types and are suitable for a wide range of applications, including classification and regression tasks.'
        )}/>
        <Featurebox
          image={svm}
          title='Support Vector Machines (Bagging)'
          onClick={handleClickOpen(
            'paper',
            'Support Vector Machines (Bagging)',
            'Support Vector Machines (SVM) is a machine learning algorithm used for classification and regression analysis. SVM works by separating data points of different classes with a decision boundary or hyperplane. This boundary is determined by the support vectors, which are the data points closest to the boundary. The SVM algorithm maximizes the margin, or the distance between the decision boundary and the support vectors of each class. This makes the classifier robust and better at handling new data. If the data cannot be separated by a straight line, SVM uses kernel functions to transform it into a higher-dimensional space where separation is possible.The SVM model would be trained on a subset of the data using features such as goal amounts, minutes played, and assists as inputs and the binary label of being drafted or not drafted as the output. The model would then use the decision boundary to separate the data into two classes - drafted and not drafted - by maximizing the margin between the two classes. If the data cannot be linearly separated, SVM would use kernel functions to transform the data into a higher-dimensional space where linear separation is possible. This would help the model to better identify patterns and make accurate predictions. To improve the accuracy and robustness of the SVM model, Bagging could be applied by training multiple SVM models on different subsets of the data and combining their predictions for the final classification. This would help to reduce overfitting and improve the models ability to generalize to new data.',
          )}
        />
        <Featurebox 
          image={neighbor} 
          title="K Nearest Neighbours"
          onClick={handleClickOpen(
            'paper',
            'K Nearest Neighbours',
            'K-nearest neighbors (KNN) is a machine learning algorithm that uses distance-based classification to predict the class of a new data point. The algorithm assumes that data points belonging to the same class will be close to each other in space. To classify a new data point, KNN calculates the distance between the new data point and all the known data points of a particular class. It then selects the K closest neighbors based on the distance metric, and applies the majority rule to assign the new data point to a particular class. The distance metric used in KNN is typically Euclidean distance or Manhattan distance, but other metrics can be used depending on the problem domain. KNN has some advantages, such as being easy to implement and interpret, and not requiring any training phase. However, it can be sensitive to the choice of K and the distance metric used, and may be computationally expensive for large datasets. In our specific case of predicting the chances of being drafted in the NHL, The algorithm would calculate the distance between the new data point and all the known data points of each class (goal amounts, minutes played, assists), and select the K closest neighbors to assign the new data point to a particular class. Overall, KNN is a simple and effective machine learning algorithm that can be used for both classification and regression tasks, but it may require some parameter tuning to achieve the best performance.',
          )} 
        />

        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
        
      </div>
      <div className='a-container'>
        <Featurebox 
        image={LR} 
        title="Logistic Regression (Bagging)" 
        onClick={handleClickOpen(
          'paper',
          'Logistic Regression (Bagging)',
          'Logistic Regression (LR) is a statistical modeling method used to analyze the relationship between a binary dependent variable and one or more independent variables. In our case, the binary dependent variable could be whether or not a player gets drafted into the NHL. LR models estimate the probability of a binary response based on one or more predictor variables. The LR model works by fitting a logistic function, also known as a sigmoid function, to the data, which models the probability of a binary response as a function of the independent variables. The output of the model is a predicted probability of the binary response, which can be used to classify the observation based on a predetermined threshold. To build an LR model, the data is first split into training and testing sets. The LR model is then trained using the training set, where the coefficients of the logistic function are estimated to maximize the likelihood of the observed data. Once the model is trained, it is used to predict the probability of the binary response for new data in the testing set. To classify new observations, a decision boundary is established based on a threshold probability value. For example, if the threshold value is set to 0.5, any predicted probability greater than or equal to 0.5 would be classified as the positive class (i.e., drafted), and any predicted probability less than 0.5 would be classified as the negative class (i.e., not drafted). Bagging can be applied to logistic regression models by training multiple independent LR models on different random subsets of the training data, and then combining the outputs of these models to make a final prediction. Overall, logistic regression models are simple but powerful tools for binary classification problems, especially when the relationship between the independent variables and the dependent variable is not necessarily linear.',
        )} 
        
      />
        <Featurebox 
          image={simple} 
          title="Simple Multilayer Perceptron"
          onClick={handleClickOpen(
            'paper',
            'Simple Multilayer Perceptron',
            'The MLP is a type of artificial neural network that is commonly used for classification tasks. It consists of multiple layers of neurons, each of which performs a linear transformation on its inputs followed by a non-linear activation function. The layers are connected in a feedforward manner, meaning that the output of one layer serves as the input to the next layer. During training, the weights and biases of the neurons are adjusted using an optimization algorithm, such as stochastic gradient descent, to minimize the error between the predicted outputs and the true outputs. This process is known as backpropagation, and it allows the model to learn how to classify new data by adjusting the strengths of the connections between the neurons. One of the key benefits of MLPs is their ability to learn non-linear relationships between the input features and the output classes. This makes them well-suited for complex classification problems where the decision boundary between classes is non-linear. MLPs are often used in combination with other techniques, such as regularization or early stopping, to prevent overfitting and improve the generalization performance of the model. Additionally, various hyperparameters of the MLP, such as the number of layers, number of neurons per layer, activation functions, and optimization algorithm, can be tuned to optimize the performance of the model on a particular task.',
          )}  
        />

        <Featurebox 
          image={complex} 
          title="Complex Multilayer Perceptron"
          onClick={handleClickOpen(
            'paper',
            'Complex Multilayer Perceptron',
            'A complex Multilayer Perceptron (MLP) feedforward neural network classifier was developed using advanced techniques such as batch normalization and dropout regularization to improve its performance and prevent overfitting. The MLP model has multiple layers of neurons, where each neuron takes inputs, performs a linear transformation, and then applies a non-linear activation function to the output. Batch normalization is applied to normalize the inputs of each layer, which helps to reduce the effects of input covariance shift and can improve training convergence. Dropout regularization is applied to randomly drop out a proportion of the neurons during each training iteration, which reduces the interdependence of the neurons and can improve the generalization performance of the model. The final output layer of the model has one neuron and a sigmoid activation function, which outputs a probability value between 0 and 1 that represents the predicted probability of the input belonging to the positive class. The binary cross-entropy loss function is used to measure the difference between the predicted output and the actual output, and the Adam optimizer is used to minimize the loss during training by adjusting the weights and biases of the neurons. By incorporating these advanced techniques, the complex MLP model is expected to perform better than the simple MLP model in terms of accuracy and generalization.',
          )} 
          />
        <Featurebox 
        image={nlp} 
        title="Natural Language Processing"
        onClick={handleClickOpen(
          'paper',
          'Natural Language Processing',
          'Natural Language Processing (NLP) is a subfield of computer science and artificial intelligence that focuses on the interaction between computers and human language. It involves the processing and analysis of natural language text data to extract meaning and generate appropriate responses. In the context of out chatbot, NLP plays a crucial role in enabling the chatbot to understand and respond to user input. When a user types in a message, the chatbot must first interpret the message to understand what the user is asking for. This is where NLP comes in - it helps the chatbot analyze the message, identify the key topics and entities, and generate an appropriate response. Showcasing some common NLP techniques used in chatbots, we utilized a preprocessing function that tokenizes and cleans up the user input to remove unnecessary information that may hinder the chatbots understanding. Furthermore, a noun extracting function identifies and extracts the nouns from the user input, which can be used to determine the users main topic or intent. A similarity computing function uses word embeddings to measure the similarity between the user input and a given category or topic, allowing the chatbot to determine the most relevant response. Overall, NLP is an important tool for chatbots to be able to understand and respond to user input in a more natural and effective way, making the chatbot more useful and user-friendly.',
        )}   
        />
      </div>
    </div>

    </div>
    
  )
}

export default Feature
