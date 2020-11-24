serve:
	 npm run serve

destroy:
	aws cloudformation delete-stack --stack-name rdok-testing-cyberpunk2077-countdown
