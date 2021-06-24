// Databricks notebook source
// MAGIC %sql
// MAGIC 
// MAGIC select * from dev.enrollment__base_enrollment

// COMMAND ----------

// MAGIC %sql
// MAGIC 
// MAGIC 
// MAGIC DESCRIBE TABLE EXTENDED DEV.enrollment__base_enrollment

// COMMAND ----------

// MAGIC %python
// MAGIC # create widget that can be found above at the top of this notebook which will allow user to enter filepath
// MAGIC # once filepath has been entered in input widget, the cell below can be run to get the markdown configurations of the file tabel 
// MAGIC dbutils.widgets.text(name = "widget_01", defaultValue = "none", label = "Hive Table Name Here")

// COMMAND ----------

// MAGIC %python
// MAGIC hive_table_name = dbutils.widgets.get(name = "widget_01") # get file path from input widget
// MAGIC 
// MAGIC sqlDF = spark.sql(f"DESCRIBE TABLE EXTENDED {hive_table_name}")
// MAGIC 
// MAGIC pandasDF = sqlDF.toPandas()
// MAGIC print(pandasDF.to_markdown())

// COMMAND ----------

// MAGIC %sql
// MAGIC drop table default.testdata2907;
// MAGIC create table default.testdata2907 (col1 string, col2 string, col3 string, col4 int) tblproperties ('col1' = 'this is a test column', 'col3' = 'this is another test column', 'col4' = 'new column with new comment');
// MAGIC insert into default.testdata2907 values ('id','fish','seen', 1);
// MAGIC insert into default.testdata2907 values ('payment', 'reptile','seen', 2);
// MAGIC insert into default.testdata2907 values ('plan_id', 'mammal','not seen', 3);

// COMMAND ----------

// MAGIC %sql 
// MAGIC select * from default.testdata2907

// COMMAND ----------

// MAGIC %sql
// MAGIC DESCRIBE TABLE default.testdata2907

// COMMAND ----------

// MAGIC %sql
// MAGIC SHOW TBLPROPERTIES default.testdata2907

// COMMAND ----------

// MAGIC %scala 
// MAGIC 
// MAGIC // Note: May need to run Cmd 3 to input hive file name in widget above titled "Hive Table Name Here: "
// MAGIC 
// MAGIC import spark.implicits._
// MAGIC 
// MAGIC val hive_table_name = dbutils.widgets.get(argName = "widget_01") // get file name from input widget (testing example was: default.testdata2907)
// MAGIC 
// MAGIC val sqlDF = spark.sql("SHOW TBLPROPERTIES " + hive_table_name) // sqlDF is the dataframe containing TBLPROPERTIES (key/value table that maps col to comment)
// MAGIC val descDF = spark.sql("DESCRIBE TABLE " + hive_table_name) // descDF is the dataframe containing the description of the hive_table_name table
// MAGIC                                                             // will be used to join with the dataframe we'll create that contains the comments from TBLPROPERTIES
// MAGIC val mainDF = spark.sql("select * from " + hive_table_name) // mainDF contains the actual table representation of hive_table_name. Used to get column names 
// MAGIC 
// MAGIC val columnsArr = mainDF.columns // array that contains column names from hive_table_name
// MAGIC val mapSize = sqlDF.count() // determine how large the map will be (note: long returned here)
// MAGIC val rowsArr = sqlDF.collect() // get the rows from the dataset. this gives us something like this [[col_name, comment]
// MAGIC val rowCount = mainDF.count() // count the number of rows from the table in hive_table_name
// MAGIC 
// MAGIC var comments = new Array[Any](mapSize.toInt) // will contain comments extrapulated from TBLPROPERTIES table
// MAGIC var keys = new Array[Any](mapSize.toInt) // will contain keys from TBLPROPERTIES table
// MAGIC var values = new Array[Any](mapSize.toInt) // will contain values from TBLEPROPERTIES table
// MAGIC 
// MAGIC var map = scala.collection.mutable.Map[Any,Any]() // create map with keys and values from TBLPROPERITES table
// MAGIC for (i <-0 to rowsArr.size-1) { // go through each row in sqlDF to parse something like [[col_name, comment]
// MAGIC   keys(i) = rowsArr(i)(0) // key will be the col_name
// MAGIC   values(i) = rowsArr(i)(1) // value will be a comment
// MAGIC   map(keys(i)) = values(i) // create key-value pair in map
// MAGIC }
// MAGIC 
// MAGIC // this algorithm ensures that the column indices from both tables are aligned
// MAGIC var index = 0 // index for comments array position
// MAGIC for (i <- 0 to columnsArr.size - 1) { // go through main table and check the column headers
// MAGIC   if (map.contains(columnsArr(i))) { // check if column name exists in hive_table_name
// MAGIC     comments(index) = map(columnsArr(i)) // comments array at that specific index that corresponds with TBLPROPERTIES index has comment
// MAGIC   }
// MAGIC   index += 1
// MAGIC }
// MAGIC 
// MAGIC var sq = Seq[(String,String)]() // sequence for creating dataframe in spark
// MAGIC for (i <- 0 to columnsArr.size-1 ) {
// MAGIC   if (comments(i) == null) comments(i) = "null"
// MAGIC   val tup = new Tuple2(columnsArr(i), comments(i).toString()) // sequence holds tuples
// MAGIC   sq = sq :+ tup // append tuple to sequence
// MAGIC } 
// MAGIC val df = sq.toDF("col_name","comment") // convert sequence to dataframe 
// MAGIC 
// MAGIC // join the descDF from SQL call with the new dataframe we created. 
// MAGIC val finalDF = descDF.join(df, descDF("col_name") === df("col_name"), "left").select(descDF("col_name"), descDF("data_type"), df("comment")) 
// MAGIC 
// MAGIC print(to_markdown(finalDF)) // use method in Cmd 10 to generate markdown format for dataframe contents

// COMMAND ----------

// MAGIC %scala
// MAGIC import org.apache.spark.sql.DataFrame
// MAGIC import spark.implicits._
// MAGIC 
// MAGIC // produces something like:
// MAGIC // |   | col_name | data_type | comment 
// MAGIC // |:-|:-|:-|:-
// MAGIC // |  0 | member_id | string | test |
// MAGIC 
// MAGIC // method accepts DataFrame type as argument and returns a string formatted with markdown form
// MAGIC def to_markdown(df: DataFrame): String = {
// MAGIC   
// MAGIC   var columns = df.columns // returns columns for description table created
// MAGIC   val collected = df.collect() // returns dataset of each row
// MAGIC   var header = "|" // header will later append column names in dataframe
// MAGIC   for (i <- 0 to columns.size-1) {
// MAGIC     val toAdd = ("|" + columns(i).toString())
// MAGIC     header = header + (toAdd) // append column name 
// MAGIC   }
// MAGIC   var headerDots = "|:-"
// MAGIC   var headerLine = "|:-" // headerLine will be the markdown line between the column header and dataset rows
// MAGIC   for (i <- 0 to columns.size -1) {
// MAGIC     headerLine = headerLine + headerDots
// MAGIC   }
// MAGIC   
// MAGIC   var rows = "" // rows will contain the datasets from the rows in dataframe
// MAGIC   for (i <- 0 to collected.size-1) {
// MAGIC     rows = rows + "|"
// MAGIC     rows = rows + i // append index to format
// MAGIC     for (j <- 0 to collected(i).size-1) {
// MAGIC       rows = rows + "|"
// MAGIC       rows = rows + collected(i)(j).toString() // append dataset value
// MAGIC     }
// MAGIC     rows = rows + "\n" // append new line signaling that the current row has been filled
// MAGIC   }
// MAGIC   val markdown_str = "\n" + header + "\n" + headerLine + "\n" + rows + "\n" // put everything together and return it to Cmd 9
// MAGIC   return markdown_str
// MAGIC }

// COMMAND ----------

// MAGIC %sh
// MAGIC dir

// COMMAND ----------

