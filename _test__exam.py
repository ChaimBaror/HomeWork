def get_num(x):
    if x < 50:
        return "OK"
get_num(4 )

_test__exam.py

import unittest
from test_1_q_1 import get_unm, get_num_bonus


class TestEeam1_1(unittest.TestCase):
    def test_get_num_small(self):
        result = get_unm(5)
        self.assertEqual(result, "OK", "there is a problem ")
