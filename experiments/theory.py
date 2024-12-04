from inspect_ai import Task, task
from inspect_ai.dataset import example_dataset
from inspect_ai.scorer import model_graded_fact
from inspect_ai.solver import (               
  prompt_template, generate, self_critique   
)                                             

DEFAULT_PROMPT="{prompt}"

@task
def theory_of_mind():
    return Task(
        dataset=example_dataset("theory_of_mind"),
        solver=[
          prompt_template(DEFAULT_PROMPT),
          generate(),
          self_critique()
        ],
        scorer=model_graded_fact()
    )
