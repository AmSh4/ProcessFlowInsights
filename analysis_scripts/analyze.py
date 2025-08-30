import sys
import pandas as pd
import networkx as nx
import json

def simple_process_miner(df):
    # Simple alpha miner simulation
    activities = df['activity'].unique()
    G = nx.DiGraph()
    for case in df['case_id'].unique():
        case_df = df[df['case_id'] == case].sort_values('timestamp')
        prev = None
        for act in case_df['activity']:
            if prev:
                G.add_edge(prev, act)
            prev = act
    nodes = [{'id': act} for act in activities]
    links = [{'source': u, 'target': v, 'value': G[u][v].get('weight', 1)} for u, v in G.edges()]
    return {'nodes': nodes, 'links': links}

if __name__ == '__main__':
    file_path = sys.argv[1]
    df = pd.read_csv(file_path)
    result = simple_process_miner(df)
    with open('result.json', 'w') as f:
        json.dump(result, f)
    # Call automation suggest
    from automation_suggest import suggest_automations
    suggestions = suggest_automations(result)
    result['suggestions'] = suggestions
    with open('result.json', 'w') as f:
        json.dump(result, f)
    print('Analysis complete')