"""Unpaired_analysis"""

def compare_models(df, model1, model2):
    model1_mean_accuracy = df[df['model'] == model1]['accuracy'].iloc[0]
    model2_mean_accuracy = df[df['model'] == model2]['accuracy'].iloc[0]

    model1_stderr = df[df['model'] == model1]['stderr'].iloc[0]
    model2_stderr = df[df['model'] == model2]['stderr'].iloc[0]

    diff_mean_accuracy = model1_mean_accuracy - model2_mean_accuracy
    diff_stderr = np.sqrt(model1_stderr**2 + model2_stderr**2)

    upper_bound = diff_mean_accuracy + 1.96 * diff_stderr
    lower_bound = diff_mean_accuracy - 1.96 * diff_stderr

    z_score = diff_mean_accuracy / diff_stderr

    is_significant_at_90_confidence = z_score > 1.645 or z_score < -1.645
    is_significant_at_95_confidence = z_score > 1.96 or z_score < -1.96
    is_significant_at_99_confidence = z_score > 2.58 or z_score < -2.58
    is_significant_at_99_9_confidence = z_score > 3.29 or z_score < -3.29


    return {'diff_mean_accuracy': diff_mean_accuracy,
            'diff_stderr': diff_stderr,
            'upper_bound': upper_bound, 
            'lower_bound': lower_bound, 
            'z_score': z_score, 
            'is_significant_at_90_confidence': is_significant_at_90_confidence, 
            'is_significant_at_95_confidence': is_significant_at_95_confidence, 
            'is_significant_at_99_confidence': is_significant_at_99_confidence, 
            'is_significant_at_99_9_confidence': is_significant_at_99_9_confidence}


# Example usage:
# diff, upper, lower, z = compare_models(all_run_data_df, 'openai/gpt-4', 'anthropic/claude-3-5-sonnet-latest')

compare_models(all_run_data_df, 'openai/gpt-4', 'anthropic/claude-3-5-sonnet-latest')


"""Paired_analysis"""
def compare_models_paired(df,df_samples, model1, model2, n_samples=100):
    model1_mean_accuracy = df[df['model'] == model1]['accuracy'].iloc[0]
    model2_mean_accuracy = df[df['model'] == model2]['accuracy'].iloc[0]


    diff_mean_accuracy = model1_mean_accuracy - model2_mean_accuracy

    models = [model1, model2]

    run_ids = df[df['model'].isin(models)]['run_id'].unique()

    run1_df = df_samples[df_samples['run_id'] == run_ids[0]][['run_id', 'sample_id', 'score_binary']]
    run2_df = df_samples[df_samples['run_id'] == run_ids[1]][['run_id', 'sample_id', 'score_binary']]

    merged_df = run1_df.merge(run2_df, on='sample_id', suffixes=('_run1', '_run2'))

    merged_df['score_diff'] = merged_df['score_binary_run1'] - merged_df['score_binary_run2']

    merged_df['diff_mean_accuracy'] = diff_mean_accuracy

    merged_df['score_diff_agg_sqaured'] = (merged_df['score_diff'] - merged_df['diff_mean_accuracy'])**2

    sum_squared_diffs = merged_df['score_diff_agg_sqaured'].sum()

    multiplier = 1/(n_samples - 1)

    paired_se = ((sum_squared_diffs * multiplier) / n_samples)**0.5

    upper_bound = diff_mean_accuracy + 1.96 * paired_se
    lower_bound = diff_mean_accuracy - 1.96 * paired_se

    z_score = diff_mean_accuracy / paired_se

    is_significant_at_90_confidence = z_score > 1.645 or z_score < -1.645
    is_significant_at_95_confidence = z_score > 1.96 or z_score < -1.96
    is_significant_at_99_confidence = z_score > 2.58 or z_score < -2.58
    is_significant_at_99_9_confidence = z_score > 3.29 or z_score < -3.29

    return {'diff_mean_accuracy': diff_mean_accuracy,
            'diff_stderr': paired_se,
            'upper_bound': upper_bound, 
            'lower_bound': lower_bound, 
            'z_score': z_score, 
            'is_significant_at_90_confidence': is_significant_at_90_confidence, 
            'is_significant_at_95_confidence': is_significant_at_95_confidence, 
            'is_significant_at_99_confidence': is_significant_at_99_confidence, 
            'is_significant_at_99_9_confidence': is_significant_at_99_9_confidence}

    

compare_models_paired(all_run_data_df, all_samples_data_df, 'anthropic/claude-3-5-sonnet-latest', 'google/gemini-1.5-flash-001')



