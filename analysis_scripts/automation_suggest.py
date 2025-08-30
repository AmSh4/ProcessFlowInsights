def suggest_automations(graph_data):
    # Rule-based: Suggest automation for high-frequency transitions
    suggestions = []
    for link in graph_data['links']:
        if link['value'] > 5:  # Arbitrary threshold
            suggestions.append(f"Automate transition from {link['source']} to {link['target']} using Ansible playbook.")
    return suggestions