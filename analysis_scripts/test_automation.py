import unittest
from analyze import simple_process_miner
import pandas as pd

class TestAnalysis(unittest.TestCase):
    def test_miner(self):
        df = pd.DataFrame({
            'case_id': [1,1,1],
            'activity': ['Start', 'Task1', 'End'],
            'timestamp': ['2023-01-01', '2023-01-02', '2023-01-03']
        })
        result = simple_process_miner(df)
        self.assertEqual(len(result['nodes']), 3)
        self.assertEqual(len(result['links']), 2)

if __name__ == '__main__':
    unittest.main()