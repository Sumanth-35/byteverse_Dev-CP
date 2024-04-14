# Importing libraries
from __future__ import print_function
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import classification_report
from sklearn import metrics
from sklearn import tree
import warnings
warnings.filterwarnings('ignore')

# Load data
path = "Crop_recommendation.csv"
df = pd.read_csv(path)

# Exploratory data analysis
df.head()
df.shape
df['label'].value_counts()
X_df=df.iloc[:,:-1]
sns.heatmap(X_df.corr(),annot=True)

# Prepare data for training
target=df['label']
Xtrain, Xtest, Ytrain, Ytest = train_test_split(X_df,target,test_size = 0.2,random_state =42)

# Initialize model results dictionary
model_results = {}

# Train Decision Tree model
from sklearn.tree import DecisionTreeClassifier
DecisionTree = DecisionTreeClassifier(criterion="entropy",random_state=42,max_depth=5)
DecisionTree.fit(Xtrain,Ytrain)
predicted_values = DecisionTree.predict(Xtest)
accuracy = metrics.accuracy_score(Ytest, predicted_values) * 100
model_results['Decision Tree'] = accuracy
print("DecisionTrees's Accuracy is: ", accuracy)
print(classification_report(Ytest,predicted_values))

# Save Decision Tree model
import pickle
DT_pkl_filename = 'DecisionTree.pkl'
DT_Model_pkl = open(DT_pkl_filename, 'wb')
pickle.dump(DecisionTree, DT_Model_pkl)
DT_Model_pkl.close()

# Train Naive Bayes model
from sklearn.naive_bayes import GaussianNB
NaiveBayes = GaussianNB()
NaiveBayes.fit(Xtrain,Ytrain)
predicted_values = NaiveBayes.predict(Xtest)
accuracy = metrics.accuracy_score(Ytest, predicted_values) * 100
model_results['Naive Bayes'] = accuracy
print("Naive Bayes's Accuracy is: ", accuracy)
print(classification_report(Ytest,predicted_values))

# Save Naive Bayes model
NB_pkl_filename = 'NBClassifier.pkl'
NB_Model_pkl = open(NB_pkl_filename, 'wb')
pickle.dump(NaiveBayes, NB_Model_pkl)
NB_Model_pkl.close()

# Train SVM model
from sklearn.svm import SVC
SVM = SVC(gamma='auto')
SVM.fit(Xtrain,Ytrain)
predicted_values = SVM.predict(Xtest)
accuracy = metrics.accuracy_score(Ytest, predicted_values) * 100
model_results['SVM'] = accuracy
print("SVM's Accuracy is: ", accuracy)
print(classification_report(Ytest,predicted_values))

# Train Logistic Regression model
from sklearn.linear_model import LogisticRegression
LogReg = LogisticRegression(random_state=2)
LogReg.fit(Xtrain,Ytrain)
predicted_values = LogReg.predict(Xtest)
accuracy = metrics.accuracy_score(Ytest, predicted_values) * 100
model_results['Logistic Regression'] = accuracy
print("Logistic Regression's Accuracy is: ", accuracy)
print(classification_report(Ytest,predicted_values))

# Save Logistic Regression model
LR_pkl_filename = 'LogisticRegression.pkl'
LR_Model_pkl = open(LR_pkl_filename, 'wb')
pickle.dump(LogReg, LR_Model_pkl)
LR_Model_pkl.close()

# Train Random Forest model
from sklearn.ensemble import RandomForestClassifier
RF = RandomForestClassifier(n_estimators=20, random_state=0)
RF.fit(Xtrain,Ytrain)
predicted_values = RF.predict(Xtest)
accuracy = metrics.accuracy_score(Ytest, predicted_values) * 100
model_results['RF'] = accuracy
print("RF's Accuracy is: ", accuracy)
print(classification_report(Ytest,predicted_values))

# Save Random Forest model
RF_pkl_filename = 'RandomForest.pkl'
RF_Model_pkl = open(RF_pkl_filename, 'wb')
pickle.dump(RF, RF_Model_pkl)
RF_Model_pkl.close()

# Plot accuracy comparison
plt.figure(figsize=[10,5],dpi = 100)
plt.title('Accuracy Comparison')
plt.xlabel('Accuracy')
plt.ylabel('Algorithm')
sns.barplot(x = list(model_results.values()), y = list(model_results.keys()), palette='dark')

# Print accuracy of each model
for k, v in model_results.items():
    print (k, '-->', v)