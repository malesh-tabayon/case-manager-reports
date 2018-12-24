
                    var self = this;
                    self.payload = payload;

        require(['icm/base/Constants', 'icm/model/properties/controller/ControllerManager' ], function(Constants,ControllerManager) {
            var userId = ecm.model.desktop.userId;
            self.editable = self.payload.workItemEditable;
            coordination = self.payload.coordination;
                     coordination.participate(Constants.CoordTopic.COMPLETE ,function(context, complete, abort){
                        collectionController = ControllerManager.bind(self.editable);						
                        collectionController.beginChangeSet();
                        collectionController.getPropertyController("F_WorkflowField","completed_by").set("value",userId);
					if(context[Constants.CoordContext.WKITEMRESPONSE]=="Complete")
					collectionController.getPropertyController("F_WorkflowField","action").set("value","complete");
					else 
                    collectionController.getPropertyController("F_WorkflowField","action").set("value","reject");
                    collectionController.endChangeSet();  
                   complete();

                    });
					
				ControllerManager.unbind(self.editable);

	
	});
