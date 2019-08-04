contract EnvironmentalZoneContract( issuingEnvironmentHandler: PublicKey,
									recipientIndustryKey: PublicKey
									recipientIndustry: Program,
									delegatedScientificTeam0: PublicKey) locks WaterTokenAmount of WaterTokenAsset
{
	clause approveWaterTransfer(this_industry_sig, this_sci_team_sig0: Signature)
	{
		verify checkTxMultiSig( [recipientIndustryKey, delegatedScientificTeam0], [this_industry_sig, this_sci_team_sig0] )
		lock WaterTokenAmount of WaterTokenAsset with recipientIndustry
	}
	
	clause cancel(cancelling_sig: Signature)
	{
		verify checkTxSig(cancelling_sig, issuingEnvironmentalHandler)
		unlock WaterTokenAmount of WaterTokenAsset
	}
}