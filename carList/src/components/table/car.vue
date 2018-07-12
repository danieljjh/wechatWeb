<template>
  <div id="vueapp">
    <!--<kendo-datasource ref="datasource1"-->
                      <!--:transport-read-url="'https://demos.telerik.com/kendo-ui/service/Products'"-->
                      <!--:transport-read-data-type="'jsonp'"-->
                      <!--:transport-update-url="'https://demos.telerik.com/kendo-ui/service/Products/Update'"-->
                      <!--:transport-update-data-type="'jsonp'"-->
                      <!--:transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/Products/Destroy'"-->
                      <!--:transport-destroy-data-type="'jsonp'"-->
                      <!--:transport-create-url="'https://demos.telerik.com/kendo-ui/service/Products/Create'"-->
                      <!--:transport-create-data-type="'jsonp'"-->
                      <!--:transport-parameter-map="parameterMap"-->
                      <!--:schema-model-id="'ProductID'"-->
                      <!--:schema-model-fields="schemaModelFields"-->
                      <!--:batch='true'-->
                      <!--:page-size='5'>-->
    <!--</kendo-datasource>-->
    <!--<kendo-grid :data-source-ref="'datasource1'" :sortable="true" :pageable='pageable' :toolbar="['create']" :editable="'inline'">-->
      <!--<kendo-grid-column field="ProductName" :width="40"></kendo-grid-column>-->
      <!--<kendo-grid-column field="UnitPrice"></kendo-grid-column>-->
      <!--<kendo-grid-column field="UnitsInStock" title="Unit Price" :width="120" :format="'{0:c}'" ></kendo-grid-column>-->
      <!--<kendo-grid-column field="Discontinued" title="Units In Stock" :width="120"></kendo-grid-column>-->
      <!--&lt;!&ndash;<kendo-grid-column field="Discontinued" :width="120"></kendo-grid-column>&ndash;&gt;-->
      <!--<kendo-grid-column :command="['edit', 'destroy']" title="&nbsp;" :width="170"></kendo-grid-column>-->
    <!--</kendo-grid>-->




    <kendo-datasource ref="datasource1"
                      :transport-read-url="'http://f2.i568.me/api/client_api/client/'"

                      :transport-read-type="'get'"
                      :transport-update-url="'https://demos.telerik.com/kendo-ui/service/Products/Update'"
                      :transport-update-data-type="'jsonp'"
                      :transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/Products/Destroy'"
                      :transport-destroy-data-type="'jsonp'"
                      :transport-create-url="'http://f2.i568.me/api/client_api/add_client'"
                    
                      :transport-create-type="'post'"
                      :transport-parameter-map="parameterMap"
                      :schema-model-id="'id'"
                      :schema-model-fields="schemaModelFields"
                      :batch='true'
                      :page-size='5'>
    </kendo-datasource>
    <kendo-grid :data-source-ref="'datasource1'" :sortable="true" :pageable='pageable' :toolbar="['create']" :editable="'inline'">
      <kendo-grid-column field="UnionID" :width="40"></kendo-grid-column>
      <kendo-grid-column field="avatarUrl"></kendo-grid-column>
      <kendo-grid-column field="city" title="Unit Price" :width="120" :format="'{0:c}'" ></kendo-grid-column>
      <kendo-grid-column field="gender" title="Units In Stock" :width="120"></kendo-grid-column>
      <!--<kendo-grid-column field="Discontinued" :width="120"></kendo-grid-column>-->
      <kendo-grid-column :command="['edit', 'destroy']" title="&nbsp;" :width="170"></kendo-grid-column>
    </kendo-grid>
  </div>
</template>

<script>
    export default {
        name: "car",
      // data(){
      //   return {
      //     pageable: {
      //       refresh: true,
      //       pageSize: 2,
      //       pageSizes: [5,10]
      //     },
      //     schemaModelFields: {
      //       ProductID: { editable: false, nullable: true },
      //       ProductName: { validation: { required: true } },
      //       UnitPrice: { type: 'number', validation: { required: true, min: 1 } },
      //       Discontinued: { type: 'boolean' },
      //       UnitsInStock: { type: 'number', validation: { min: 0, required: true } }
      //     }
      //   }
      // },


      data(){
        return {
          pageable: {
            refresh: true,
            pageSize: 2,
            pageSizes: [5,10]
          },
          schemaModelFields: {
            id: {  },
            UnionID: {  },
            avatarUrl: { },
            city: {  },
            gender: { }
          }
        }
      },
      methods:{
        parameterMap: function(options, operation) {
          if (operation !== 'read' && options.models) {
            return { models: kendo.stringify(options.models) }
          }
        }
      }
    }
</script>

<style scoped>

</style>
