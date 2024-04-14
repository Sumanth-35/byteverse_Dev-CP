
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv("yield_df.csv")

print(df.head())

df.drop('Unnamed: 0', axis=1, inplace=True)

print(df.shape)

print(df.info())

df.isnull().sum()

df.duplicated().sum()




df.drop_duplicates(inplace=True)




df.duplicated().sum()




def isStr(obj):
    try:
        float(obj)
        return False
    except:
        return True


to_drop = df[df['average_rain_fall_mm_per_year'].apply(isStr)].index




df = df.drop(to_drop)




df




df['average_rain_fall_mm_per_year'] = df['average_rain_fall_mm_per_year'].astype(np.float64)




len(df['Area'].unique())




plt.figure(figsize=(15, 20))
sns.countplot(y=df['Area'])
plt.show()




(df['Area'].value_counts() < 500).sum()




country = df['Area'].unique()
yield_per_country = []
for state in country:
    yield_per_country.append(df[df['Area'] == state]['hg/ha_yield'].sum())




df['hg/ha_yield'].sum()




yield_per_country




plt.figure(figsize=(15, 20))
sns.barplot(y=country, x=yield_per_country)




sns.countplot(y=df['Item'])



crops = df['Item'].unique()
yield_per_crop = []
for crop in crops:
    yield_per_crop.append(df[df['Item'] == crop]['hg/ha_yield'].sum())



sns.barplot(y=crops, x=yield_per_crop)



col = ['Year', 'average_rain_fall_mm_per_year', 'pesticides_tonnes', 'avg_temp', 'Area', 'Item', 'hg/ha_yield']
df = df[col]
X = df.iloc[:, :-1]
y = df.iloc[:, -1]




df.head(3)



from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, train_size=0.8, random_state=0, shuffle=True)



from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler

ohe = OneHotEncoder(drop='first')
scale = StandardScaler()

preprocesser = ColumnTransformer(
    transformers=[
        ('StandardScale', scale, [0, 1, 2, 3]),
        ('OHE', ohe, [4, 5]),
    ],
    remainder='passthrough'
)

# In[30]:


X_train_dummy = preprocesser.fit_transform(X_train)
X_test_dummy = preprocesser.transform(X_test)

# In[31]:


preprocesser.get_feature_names_out(col[:-1])


from sklearn.linear_model import LinearRegression, Lasso, Ridge
from sklearn.neighbors import KNeighborsRegressor
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_absolute_error, r2_score

models = {
    'lr': LinearRegression(),
    'lss': Lasso(),
    'Rid': Ridge(),
    'Dtr': DecisionTreeRegressor()
}
for name, md in models.items():
    md.fit(X_train_dummy, y_train)
    y_pred = md.predict(X_test_dummy)

    print(f"{name} : mae : {mean_absolute_error(y_test, y_pred)} score : {r2_score(y_test, y_pred)}")


dtr = DecisionTreeRegressor()
dtr.fit(X_train_dummy, y_train)
dtr.predict(X_test_dummy)



def prediction(Year, average_rain_fall_mm_per_year, pesticides_tonnes, avg_temp, Area, Item):

    features = np.array([[Year, average_rain_fall_mm_per_year, pesticides_tonnes, avg_temp, Area, Item]], dtype=object)


    transformed_features = preprocesser.transform(features)


    predicted_yield = dtr.predict(transformed_features).reshape(1, -1)

    return predicted_yield[0]




import pickle

pickle.dump(dtr, open('dtr.pkl', 'wb'))
pickle.dump(preprocesser, open('preprocessor.pkl', 'wb'))



import sklearn

print(sklearn.__version__)






